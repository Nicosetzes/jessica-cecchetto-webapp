"use client";

import { useEffect, useState } from "react";

const copyToClipboard = (text: string): boolean => {
  try {
    navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};

export const useCopyToClipboard = () => {
  const delay = 1000;

  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    if (result) {
      setTimeout(() => setResult(false), delay);
    }
  }, [result]);

  const copy = (text: string) => {
    const done = copyToClipboard(text);
    if (!done) return;
    setResult(true);
  };

  return [copy, result] as const;
};
