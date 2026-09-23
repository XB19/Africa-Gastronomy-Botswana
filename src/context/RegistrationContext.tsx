import { createContext, useContext, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";

export interface RegistrationDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  organisation: string;
}

interface RegistrationState {
  programmeId: string | null;
  categoryId: string | null;
  details: RegistrationDetails;
  reference: string | null;
}

interface RegistrationContextValue extends RegistrationState {
  setProgrammeId: (id: string) => void;
  setCategoryId: (id: string) => void;
  setDetails: (details: RegistrationDetails) => void;
  generateReference: () => string;
  reset: () => void;
}

const emptyDetails: RegistrationDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  organisation: "",
};

const RegistrationContext = createContext<RegistrationContextValue | null>(null);

export function RegistrationProvider({ children }: PropsWithChildren) {
  const [programmeId, setProgrammeId] = useState<string | null>(null);
  const [categoryId, setCategoryId] = useState<string | null>(null);
  const [details, setDetails] = useState<RegistrationDetails>(emptyDetails);
  const [reference, setReference] = useState<string | null>(null);

  const value = useMemo<RegistrationContextValue>(
    () => ({
      programmeId,
      categoryId,
      details,
      reference,
      setProgrammeId,
      setCategoryId,
      setDetails,
      generateReference: () => {
        const ref = `FIGA-2026-${Math.floor(100000 + Math.random() * 900000)}`;
        setReference(ref);
        return ref;
      },
      reset: () => {
        setProgrammeId(null);
        setCategoryId(null);
        setDetails(emptyDetails);
        setReference(null);
      },
    }),
    [programmeId, categoryId, details, reference]
  );

  return <RegistrationContext.Provider value={value}>{children}</RegistrationContext.Provider>;
}

export function useRegistration() {
  const ctx = useContext(RegistrationContext);
  if (!ctx) throw new Error("useRegistration must be used within RegistrationProvider");
  return ctx;
}
