import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { icons } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { Button } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { useRegistration } from "../../context/RegistrationContext";

export default function RegisterDetails() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { details, setDetails } = useRegistration();
  const [form, setForm] = useState(details);

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDetails(form);
    navigate(paths.registerCategory);
  }

  const inputClass =
    " border border-ink-800/15 px-4 py-3 text-sm font-normal text-ink-800 focus:border-terracotta-400 focus:outline-none";
  const labelClass = "flex flex-col gap-1.5 text-sm font-semibold text-ink-700";

  return (
    <RegisterShell step={1} title={t("register.details.title")} subtitle={t("register.details.subtitle")}>
      <form onSubmit={onSubmit} className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          {t("register.details.firstName")}
          <input required className={inputClass} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} />
        </label>
        <label className={labelClass}>
          {t("register.details.lastName")}
          <input required className={inputClass} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} />
        </label>
        <label className={labelClass}>
          {t("register.details.email")}
          <input required type="email" className={inputClass} value={form.email} onChange={(e) => update("email", e.target.value)} />
        </label>
        <label className={labelClass}>
          {t("register.details.phone")}
          <input required type="tel" className={inputClass} value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </label>
        <label className={labelClass}>
          {t("register.details.country")}
          <input required className={inputClass} value={form.country} onChange={(e) => update("country", e.target.value)} />
        </label>
        <label className={labelClass}>
          {t("register.details.organisation")}
          <input className={inputClass} value={form.organisation} onChange={(e) => update("organisation", e.target.value)} />
        </label>

        <div className="flex items-center gap-4 pt-2 sm:col-span-2">
          <Button type="button" variant="outline" onClick={() => navigate(paths.register)}>
            {t("register.back")}
          </Button>
          <Button type="submit" icon={icons.arrowRight}>
            {t("register.details.next")}
          </Button>
        </div>
      </form>
    </RegisterShell>
  );
}
