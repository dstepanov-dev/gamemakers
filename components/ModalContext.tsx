"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ModalContextValue = {
  isOpen: boolean;
  /** Service the visitor clicked through from, used to prefill the message. */
  subject: string | null;
  open: (subject?: string) => void;
  close: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | null>(null);

  const open = useCallback((nextSubject?: string) => {
    setSubject(typeof nextSubject === "string" ? nextSubject : null);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<ModalContextValue>(
    () => ({ isOpen, subject, open, close }),
    [isOpen, subject, open, close]
  );

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return ctx;
}
