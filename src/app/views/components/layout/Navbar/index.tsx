"use client";

import ICONS from "./iconsMap";
import Link from "next/link";
import MENU from "../menu";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Cross, Hamburger } from "@/views/components/icons";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ menu = MENU }) => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 991) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (mobileOpen) {
        if (!mobileRef.current || !mobileRef.current.contains(target)) {
          setMobileOpen(false);
        }
      }
    }

    if (mobileOpen) document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [mobileOpen]);

  const isActive = (item: { href?: string }) => {
    if (!pathname || !item.href) return false;
    if (item.href === "/") return pathname === "/";
    return pathname === item.href || pathname.startsWith(item.href + "/");
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink} aria-label="Home">
            LOGO
            {/* <Image
              alt="Logo"
              height={300}
              src="/images/logo-2.png"
              width={300}
            /> */}
          </Link>
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.desktopMenu}>
            {menu.map((item, i) => (
              <li key={i} className={styles.item}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${
                    isActive(item) ? styles.active : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className={`${styles.hamburger} ${mobileOpen ? styles.open : ""}`}
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {!mobileOpen ? (
              <Hamburger width={24} height={20} />
            ) : (
              <Cross width={24} height={24} />
            )}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            ref={mobileRef}
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className={styles.mobileList}>
              {menu.map((item, i) => (
                <li key={i} className={styles.mobileListItem}>
                  <Link
                    href={item.href}
                    className={`${styles.linkWithIcon} ${styles.mobile} ${
                      isActive(item) ? styles.active : ""
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className={styles.labelContainer}>
                      {item.iconKey &&
                      ICONS[item.iconKey as keyof typeof ICONS] ? (
                        <span
                          className={`${styles.icon} ${
                            isActive(item) ? styles.activeIcon : ""
                          }`}
                          aria-hidden
                        >
                          {React.createElement(
                            ICONS[item.iconKey as keyof typeof ICONS],
                            {
                              fill: isActive(item)
                                ? "var(--color-1)"
                                : "var(--color-text-light)",
                              height: 24,
                              width: 24,
                            },
                          )}
                        </span>
                      ) : null}
                      <span>{item.label}</span>
                    </div>
                    {item.description ? (
                      <span className={styles.description}>
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
