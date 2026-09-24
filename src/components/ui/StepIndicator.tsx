import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";

interface StepIndicatorProps {
  steps: string[];
  current: number;
}

export function StepIndicator({ steps, current }: StepIndicatorProps) {
  return (
    <div className="flex w-full items-center">
      {steps.map((label, i) => {
        const isDone = i < current;
        const isCurrent = i === current;
        return (
          <div key={label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                  isDone
                    ? "bg-primary-500 text-white"
                    : isCurrent
                    ? "border-2 border-primary-500 text-primary-600"
                    : "border-2 border-ink-800/15 text-ink-300"
                }`}
              >
                {isDone ? <FontAwesomeIcon icon={icons.checkPlain} className="text-xs" /> : i + 1}
              </div>
              <span
                className={`hidden text-center text-[11px] font-semibold uppercase tracking-wide sm:block ${
                  isCurrent ? "text-primary-600" : isDone ? "text-ink-600" : "text-ink-300"
                }`}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-2 h-0.5 flex-1 sm:mx-3 ${isDone ? "bg-primary-500" : "bg-ink-800/10"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}
