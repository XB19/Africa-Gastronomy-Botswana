import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons, dataIconMap } from "../../lib/icons";
import { RegisterShell } from "../../components/ui/RegisterShell";
import { paths } from "../../router/paths";
import { programmes } from "../../data/programmes";
import { useRegistration } from "../../context/RegistrationContext";

export default function RegisterProgramme() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { programmeId, setProgrammeId } = useRegistration();

  function select(id: string) {
    setProgrammeId(id);
    navigate(paths.registerDetails);
  }

  return (
    <RegisterShell step={0} title={t("register.programme.title")} subtitle={t("register.programme.subtitle")}>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {programmes.map((programme) => (
          <button
            key={programme.id}
            onClick={() => select(programme.id)}
            className={`flex flex-col items-start gap-3 border p-6 text-left transition-colors hover:border-terracotta-400 ${
              programmeId === programme.id
                ? "border-terracotta-500 bg-terracotta-50"
                : "border-ink-800/8 bg-white"
            }`}
          >
            <span className="flex h-11 w-11 items-center justify-center bg-terracotta-50 text-terracotta-600">
              <FontAwesomeIcon icon={dataIconMap[programme.icon]} />
            </span>
            <div>
              <h3 className="font-display text-base font-semibold text-terracotta-700">{programme.title}</h3>
              <p className="mt-1 text-sm text-ink-500">{programme.description}</p>
            </div>
            <span className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-terracotta-600">
              Select <FontAwesomeIcon icon={icons.arrowRight} className="text-[10px]" />
            </span>
          </button>
        ))}
      </div>
    </RegisterShell>
  );
}
