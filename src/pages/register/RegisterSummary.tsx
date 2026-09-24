import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, dataIconMap } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { Button } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { programmes } from "../../data/programmes";
import { registrationCategories, categoryIconMap } from "../../data/categories";
import { useRegistration } from "../../context/RegistrationContext";

export default function RegisterSummary() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { programmeId, categoryId, details } = useRegistration();

  const programme = programmes.find((p) => p.id === programmeId);
  const category = registrationCategories.find((c) => c.id === categoryId);

  return (
    <RegisterShell step={3} title={t("register.summary.title")} subtitle={t("register.summary.subtitle")}>
      <div className="grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4 border border-ink-800/8 bg-white p-7">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-semibold text-ink-800">{t("register.steps.programme")}</h3>
            <button
              onClick={() => navigate(paths.register)}
              className="text-xs font-semibold text-primary-600 hover:underline"
            >
              {t("register.summary.edit")}
            </button>
          </div>
          {programme ? (
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-600">
                <FontAwesomeIcon icon={dataIconMap[programme.icon]} />
              </span>
              <div>
                <p className="font-semibold text-ink-800">{programme.title}</p>
                <p className="text-xs text-ink-400">{programme.day}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-ink-400">No programme selected.</p>
          )}
        </div>

        <div className="flex flex-col gap-4 border border-ink-800/8 bg-white p-7">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-semibold text-ink-800">{t("register.steps.category")}</h3>
            <button
              onClick={() => navigate(paths.registerCategory)}
              className="text-xs font-semibold text-primary-600 hover:underline"
            >
              {t("register.summary.edit")}
            </button>
          </div>
          {category ? (
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-600">
                <FontAwesomeIcon icon={categoryIconMap[category.icon]} />
              </span>
              <div>
                <p className="font-semibold text-ink-800">{category.name}</p>
                <p className="text-xs font-bold text-primary-600">{category.price}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-ink-400">No category selected.</p>
          )}
        </div>

        <div className="flex flex-col gap-4 border border-ink-800/8 bg-white p-7 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-base font-semibold text-ink-800">{t("register.steps.details")}</h3>
            <button
              onClick={() => navigate(paths.registerDetails)}
              className="text-xs font-semibold text-primary-600 hover:underline"
            >
              {t("register.summary.edit")}
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3">
            <div>
              <p className="text-xs text-ink-400">{t("register.details.firstName")}</p>
              <p className="font-medium text-ink-800">{details.firstName || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">{t("register.details.lastName")}</p>
              <p className="font-medium text-ink-800">{details.lastName || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">{t("register.details.email")}</p>
              <p className="font-medium text-ink-800">{details.email || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">{t("register.details.phone")}</p>
              <p className="font-medium text-ink-800">{details.phone || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">{t("register.details.country")}</p>
              <p className="font-medium text-ink-800">{details.country || "—"}</p>
            </div>
            <div>
              <p className="text-xs text-ink-400">{t("register.details.organisation")}</p>
              <p className="font-medium text-ink-800">{details.organisation || "—"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Button type="button" variant="outline" onClick={() => navigate(paths.registerCategory)}>
          {t("register.back")}
        </Button>
        <Button type="button" icon={icons.arrowRight} onClick={() => navigate(paths.registerPayment)}>
          {t("register.summary.next")}
        </Button>
      </div>
    </RegisterShell>
  );
}
