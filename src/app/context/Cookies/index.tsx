"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useState,
} from "react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type CookieContextType = {
  isResolved: boolean;
  isLoading: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (customPrefs: Partial<CookiePreferences>) => void;
  openBanner: () => void;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const STORAGE_KEY = "cookie-consent-preferences";

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getSnapshot = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
};

const getServerSnapshot = () => null;

const CookieContext = createContext<CookieContextType | null>(null);

export const CookieProvider = ({ children }: { children: React.ReactNode }) => {
  const rawPreferences = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const [forceShow, setForceShow] = useState(false);

  const isResolved = rawPreferences !== null && !forceShow;
  const isLoading = rawPreferences === undefined;

  let preferences = DEFAULT_PREFERENCES;
  if (rawPreferences) {
    try {
      preferences = JSON.parse(rawPreferences);
    } catch {}
  }

  const saveAndApply = (newPrefs: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    setForceShow(false);
    window.dispatchEvent(new Event("storage"));
  };

  const acceptAll = () => {
    saveAndApply({ necessary: true, analytics: true, marketing: true });
  };

  const rejectNonEssential = () => {
    saveAndApply({ necessary: true, analytics: false, marketing: false });
  };

  const savePreferences = (customPrefs: Partial<CookiePreferences>) => {
    saveAndApply({ ...DEFAULT_PREFERENCES, ...customPrefs, necessary: true });
  };

  const openBanner = () => {
    setForceShow(true);
  };

  return (
    <CookieContext.Provider
      value={{
        isResolved,
        isLoading,
        preferences,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        openBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error(
      "useCookieConsent debe ser usado dentro de un CookieProvider",
    );
  }
  return context;
};
