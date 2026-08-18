"use client";

import { useCookieConsent } from "@/context";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import styles from "./styles.module.css";

const CookieBanner = () => {
  const {
    isResolved,
    isLoading,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (isLoading || isResolved) {
    return null;
  }

  const handleSaveCustom = () => {
    savePreferences({ analytics, marketing });
    setShowSettings(false);
  };

  return (
    <AnimatePresence>
      <motion.aside
        aria-label="Cookie Consent"
        className={styles.banner}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        role="dialog"
      >
        <div className={styles.container}>
          <h3>We use cookies to improve your experience</h3>
          <p>
            This website uses necessary cookies to ensure the website functions
            properly. With your consent, we may also use analytics and marketing
            cookies to understand website usage and improve our services.
          </p>
          <p>
            You can accept all cookies, reject non-essential cookies, or manage
            your preferences.
          </p>

          {showSettings && (
            <div className={styles.settingsPanel}>
              <label className={styles.checkboxLabel}>
                <input type="checkbox" checked disabled />
                <span>
                  <strong>Necessary</strong> (Always Active)
                </span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                />
                <span>
                  <strong>Analytics</strong>
                </span>
              </label>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                />
                <span>
                  <strong>Marketing</strong>
                </span>
              </label>
              <button
                type="button"
                className={styles.saveBtn}
                onClick={handleSaveCustom}
              >
                Save Preferences
              </button>
            </div>
          )}
          <div className={styles.actions}>
            <button
              type="button"
              className={styles.btnPrimary}
              onClick={acceptAll}
            >
              Accept All
            </button>
            <button
              type="button"
              className={styles.btnSecondary}
              onClick={rejectNonEssential}
            >
              Reject Non-Essential Cookies
            </button>
            <button
              type="button"
              className={styles.btnOutline}
              onClick={() => setShowSettings(!showSettings)}
            >
              Cookie Settings
            </button>
          </div>
          <p className={styles.footerText}>
            For more information, please read our{" "}
            <Link href="/privacy-policy">Cookie & Privacy Policy</Link>
          </p>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default CookieBanner;
