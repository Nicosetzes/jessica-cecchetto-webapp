"use client";

import ICONS from "./iconsMap";
import Link from "next/link";
import MENU from "../menu";
import type { MenuItem } from "../menu";
import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Chevron, Cross, Hamburger } from "@/views/components/icons";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ menu = MENU }) => {
  const pathname = usePathname();
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
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
      if (
        mobileOpen &&
        mobileRef.current &&
        !mobileRef.current.contains(target)
      ) {
        setMobileOpen(false);
      }
      if (openDropdown && navRef.current && !navRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [mobileOpen, openDropdown]);

  const isActive = (item: MenuItem) => {
    if (!pathname) return false;
    if (item.children) {
      return item.children.some(
        (child) =>
          pathname === child.href || pathname.startsWith(child.href + "/"),
      );
    }
    if (!item.href) return false;
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
        <nav className={styles.nav} aria-label="Main navigation" ref={navRef}>
          <ul className={styles.desktopMenu}>
            {menu.map((item, i) => {
              const active = isActive(item);
              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <li
                    key={i}
                    className={`${styles.item} ${styles.hasDropdown}`}
                  >
                    <button
                      className={`${styles.link} ${styles.dropdownTrigger} ${
                        active ? styles.active : ""
                      }`}
                      onClick={() =>
                        setOpenDropdown(isOpen ? null : item.label)
                      }
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <motion.span
                        className={styles.chevron}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden
                      >
                        <Chevron size={16} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          className={styles.dropdown}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.18 }}
                        >
                          <ul className={styles.dropdownList}>
                            {item.children.map((child, j) => (
                              <li key={j}>
                                <Link
                                  href={child.href}
                                  className={`${styles.dropdownLink} ${
                                    pathname === child.href
                                      ? styles.dropdownLinkActive
                                      : ""
                                  }`}
                                  onClick={() => setOpenDropdown(null)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              }
              return (
                <li key={i} className={styles.item}>
                  <Link
                    href={item.href!}
                    className={`${styles.link} ${
                      item.cta ? styles.cta : active ? styles.active : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
              {menu.map((item, i) => {
                const active = isActive(item);
                if (item.children) {
                  const isExpanded = mobileExpanded === item.label;
                  return (
                    <li key={i} className={styles.mobileListItem}>
                      <button
                        className={`${styles.linkWithIcon} ${styles.accordionTrigger} ${
                          active ? styles.active : ""
                        }`}
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : item.label)
                        }
                        aria-expanded={isExpanded}
                      >
                        <div className={styles.labelContainer}>
                          {item.iconKey &&
                          ICONS[item.iconKey as keyof typeof ICONS] ? (
                            <span
                              className={`${styles.icon} ${
                                active ? styles.activeIcon : ""
                              }`}
                              aria-hidden
                            >
                              {React.createElement(
                                ICONS[item.iconKey as keyof typeof ICONS],
                                {
                                  fill: active
                                    ? "var(--color-primary)"
                                    : "var(--color-text-light)",
                                  height: 24,
                                  width: 24,
                                },
                              )}
                            </span>
                          ) : null}
                          <span>{item.label}</span>
                          <motion.span
                            className={styles.chevronMobile}
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            aria-hidden
                          >
                            <Chevron size={20} />
                          </motion.span>
                        </div>
                        {item.description ? (
                          <span className={styles.description}>
                            {item.description}
                          </span>
                        ) : null}
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.ul
                            className={styles.accordionList}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.children.map((child, j) => (
                              <li key={j} className={styles.accordionItem}>
                                <Link
                                  href={child.href}
                                  className={`${styles.accordionLink} ${
                                    pathname === child.href
                                      ? styles.accordionLinkActive
                                      : ""
                                  }`}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }
                return (
                  <li key={i} className={styles.mobileListItem}>
                    <Link
                      href={item.href!}
                      className={`${styles.linkWithIcon} ${styles.mobile} ${
                        active ? styles.active : ""
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <div className={styles.labelContainer}>
                        {item.iconKey &&
                        ICONS[item.iconKey as keyof typeof ICONS] ? (
                          <span
                            className={`${styles.icon} ${
                              active ? styles.activeIcon : ""
                            }`}
                            aria-hidden
                          >
                            {React.createElement(
                              ICONS[item.iconKey as keyof typeof ICONS],
                              {
                                fill: active
                                  ? "var(--color-primary)"
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
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
