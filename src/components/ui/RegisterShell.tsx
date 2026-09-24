import type { PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Container } from "./Container";
import { StepIndicator } from "./StepIndicator";

interface RegisterShellProps {
  step: number;
  title: string;
  subtitle?: string;
}

export function RegisterShell({ step, title, subtitle, children }: PropsWithChildren<RegisterShellProps>) {
  const { t } = useTranslation();
  const steps = [
    t("register.steps.programme"),
    t("register.steps.details"),
    t("register.steps.category"),
    t("register.steps.summary"),
    t("register.steps.payment"),
    t("register.steps.confirmation"),
  ];

  return (
    <section className="bg-surface-100 py-14 sm:py-20">
      <Container className="flex flex-col gap-10">
        <StepIndicator steps={steps} current={step} />
        <div className="flex flex-col gap-2">
          <h1 className="font-display text-2xl font-bold text-ink-800 sm:text-3xl">{title}</h1>
          {subtitle && <p className="text-ink-500">{subtitle}</p>}
        </div>
        {children}
      </Container>
    </section>
  );
}
