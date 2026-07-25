"use client";

import styles from "./styles.module.css";
import { useCopyToClipboard } from "@/hooks";
import { Check, Copy } from "@/views/components/icons";

type ClipboardButtonProps = {
  ariaLabel: string;
  textToCopy: string;
};

const ClipboardButton = ({ ariaLabel, textToCopy }: ClipboardButtonProps) => {
  const [copy, copiedState] = useCopyToClipboard();

  return (
    <button
      aria-label={ariaLabel}
      className={styles.copyButton}
      type="button"
      onClick={() => copy(textToCopy)}
    >
      {copiedState ? (
        <>
          <Check height={32} width={32} />
          <span className={styles.copiedText}>Copied!</span>
        </>
      ) : (
        <>
          <Copy fill="var(--color-secondary)" height={32} width={32} />
          <span className={styles.copiedText}>Copy to clipboard</span>
        </>
      )}
    </button>
  );
};

export default ClipboardButton;
