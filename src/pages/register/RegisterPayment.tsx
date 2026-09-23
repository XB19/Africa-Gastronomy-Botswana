import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { Button } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { registrationCategories } from "../../data/categories";
import { useRegistration } from "../../context/RegistrationContext";

type Method = "card" | "mobile-money" | "bank-transfer";

const methods: { id: Method; label: string; icon: typeof icons.card }[] = [
  { id: "card", label: "Credit / Debit Card", icon: icons.card },
  { id: "mobile-money", label: "Mobile Money", icon: icons.phone },
  { id: "bank-transfer", label: "Bank Transfer", icon: icons.building },
];

export default function RegisterPayment() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { categoryId, generateReference } = useRegistration();
  const [method, setMethod] = useState<Method>("card");
  const [processing, setProcessing] = useState(false);

  const category = registrationCategories.find((c) => c.id === categoryId);

  function onConfirm(e: React.FormEvent) {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      generateReference();
      navigate(paths.registerConfirmation);
    }, 900);
  }

  return (
    <RegisterShell step={4} title={t("register.payment.title")} subtitle={t("register.payment.subtitle")}>
      <div className="grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr]">
        <form onSubmit={onConfirm} className="flex flex-col gap-6">
          <div className="border border-ink-800/8 bg-white p-6">
            <p className="mb-4 text-sm font-semibold text-ink-700">Select Payment Method</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {methods.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`flex flex-col items-center gap-2 border p-4 text-center transition-colors ${
                    method === m.id ? "border-terracotta-500 bg-terracotta-50" : "border-ink-800/10 bg-white"
                  }`}
                >
                  <FontAwesomeIcon icon={m.icon} className="text-lg text-terracotta-600" />
                  <span className="text-xs font-semibold text-ink-700">{m.label}</span>
                </button>
              ))}
            </div>

            {method === "card" && (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700 sm:col-span-2">
                  Card Number
                  <input required placeholder="•••• •••• •••• ••••" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-terracotta-400 focus:outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
                  Expiry
                  <input required placeholder="MM/YY" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-terracotta-400 focus:outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
                  CVC
                  <input required placeholder="•••" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-terracotta-400 focus:outline-none" />
                </label>
              </div>
            )}
            {method === "mobile-money" && (
              <label className="mt-6 flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
                Mobile Money Number
                <input required placeholder="+267 ..." className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-terracotta-400 focus:outline-none" />
              </label>
            )}
            {method === "bank-transfer" && (
              <p className="mt-6 bg-cream-200/60 p-4 text-sm text-ink-500">
                Bank transfer details and a reference number will be emailed to you after you confirm this
                registration.
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 bg-cream-200/60 px-4 py-3 text-xs text-ink-500">
            <FontAwesomeIcon icon={icons.lock} className="text-terracotta-500" />
            {t("register.payment.subtitle")}
          </div>

          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" onClick={() => navigate(paths.registerSummary)}>
              {t("register.back")}
            </Button>
            <Button type="submit" icon={icons.arrowRight} disabled={processing}>
              {processing ? "Processing…" : t("register.payment.next")}
            </Button>
          </div>
        </form>

        <div className="h-fit border border-ink-800/8 bg-white p-6">
          <p className="text-sm font-semibold text-ink-700">Order Summary</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-ink-500">{category?.name ?? "Category"}</span>
            <span className="font-semibold text-ink-800">{category?.price ?? "—"}</span>
          </div>
          <div className="my-4 h-px bg-ink-800/8" />
          <div className="flex items-center justify-between text-sm font-bold">
            <span className="text-ink-800">Total Due</span>
            <span className="text-terracotta-600">{category?.price ?? "—"}</span>
          </div>
        </div>
      </div>
    </RegisterShell>
  );
}
