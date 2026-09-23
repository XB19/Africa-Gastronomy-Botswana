import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { LinkButton } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { useRegistration } from "../../context/RegistrationContext";

export default function RegisterConfirmation() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { reference, details, reset } = useRegistration();

  useEffect(() => {
    if (!reference) navigate(paths.register);
  }, [reference, navigate]);

  return (
    <RegisterShell step={5} title={t("register.confirmation.title")} subtitle={t("register.confirmation.subtitle")}>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 border border-ink-800/8 bg-white p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest-500/10 text-forest-500">
          <FontAwesomeIcon icon={icons.check} className="text-3xl" />
        </span>
        <div>
          <p className="text-sm text-ink-400">{t("register.confirmation.reference")}</p>
          <p className="font-display text-2xl font-bold tracking-wide text-ink-800">{reference}</p>
        </div>
        <p className="text-ink-500">
          {details.firstName ? `${details.firstName}, thank you — `: ""}
          {t("register.confirmation.subtitle")}
        </p>
        <LinkButton
          to={paths.home}
          icon={icons.arrowRight}
          onClick={() => reset()}
        >
          {t("register.confirmation.cta")}
        </LinkButton>
      </div>
    </RegisterShell>
  );
}
