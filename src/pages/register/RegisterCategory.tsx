import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { Button } from "../../components/ui/Button";
import { paths } from "../../router/paths";
import { registrationCategories, categoryIconMap } from "../../data/categories";
import { useRegistration } from "../../context/RegistrationContext";

export default function RegisterCategory() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { categoryId, setCategoryId } = useRegistration();

  function onNext() {
    if (!categoryId) return;
    navigate(paths.registerSummary);
  }

  return (
    <RegisterShell step={2} title={t("register.category.title")} subtitle={t("register.category.subtitle")}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {registrationCategories.map((cat) => {
          const selected = categoryId === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setCategoryId(cat.id)}
              className={`flex flex-col gap-4 border p-6 text-left transition-colors hover:border-terracotta-400 ${
                selected ? "border-terracotta-500 bg-terracotta-50" : "border-ink-800/8 bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center bg-terracotta-100 text-terracotta-600">
                  <FontAwesomeIcon icon={categoryIconMap[cat.icon]} />
                </span>
                {selected && <FontAwesomeIcon icon={icons.check} className="text-lg text-terracotta-500" />}
              </div>
              <div>
                <h3 className="font-display text-base font-semibold text-terracotta-700">{cat.name}</h3>
                <p className="mt-0.5 text-sm font-bold text-terracotta-600">{cat.price}</p>
              </div>
              <p className="text-sm text-ink-500">{cat.description}</p>
              <ul className="flex flex-col gap-1.5 text-xs text-ink-500">
                {cat.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <FontAwesomeIcon icon={icons.checkPlain} className="text-terracotta-400" />
                    {perk}
                  </li>
                ))}
              </ul>
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Button type="button" variant="outline" onClick={() => navigate(paths.registerDetails)}>
          {t("register.back")}
        </Button>
        <Button type="button" icon={icons.arrowRight} disabled={!categoryId} onClick={onNext}>
          {t("register.category.next")}
        </Button>
      </div>
    </RegisterShell>
  );
}
