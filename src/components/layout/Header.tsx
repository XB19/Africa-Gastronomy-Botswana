import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { LinkButton } from "../ui/Button";
import logo from "../../assets/brand/logo.png";

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventMenuOpen, setEventMenuOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setEventMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = (isActive: boolean) =>
    `shrink-0 whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-normal transition-colors ${
      isActive ? "text-primary-600" : "text-ink-700 hover:text-primary-600"
    }`;

  const eventLinks = [
    { to: paths.countries, label: t("nav.countries") },
    { to: paths.calendar, label: t("nav.calendar") },
    { to: paths.dashboard, label: t("nav.dashboard") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/8 bg-white">
      <div className="hidden border-b border-ink-800/8 bg-surface-100 lg:block">
        <div className="mx-auto flex max-w-8xl items-center justify-end gap-2 px-5 py-2 text-xs text-ink-500 sm:px-8 lg:px-12">
          <FontAwesomeIcon icon={icons.location} className="text-[10px] text-primary-500" />
          <span>{t("header.topbar")}</span>
        </div>
      </div>

      <div className="mx-auto flex max-w-8xl items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
        <NavLink to={paths.home} className="flex shrink-0 items-center gap-3">
          <img src={logo} alt="Africa Gastronomy Botswana" className="h-12 w-12" />
          <div className="hidden leading-tight sm:block">
            <span className="block font-display text-[15px] font-bold text-ink-800">FIGA Botswana</span>
            <span className="block text-[10px] font-semibold uppercase tracking-widest text-primary-600">
              2026
            </span>
          </div>
        </NavLink>

        <nav className="hidden shrink-0 items-center gap-4 min-[1400px]:flex">
          <NavLink to={paths.home} className={({ isActive }) => navLinkClass(isActive)} end>
            {t("nav.home")}
          </NavLink>
          <NavLink to={paths.about} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.about")}
          </NavLink>
          <NavLink to={paths.gastronomy} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.gastronomy")}
          </NavLink>
          <NavLink to={paths.programmes} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.programmes")}
          </NavLink>
          <NavLink to={paths.chefs} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.chefs")}
          </NavLink>

          <div
            className="relative shrink-0"
            onMouseEnter={() => setEventMenuOpen(true)}
            onMouseLeave={() => setEventMenuOpen(false)}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-normal text-ink-700 hover:text-primary-600"
            >
              Event
              <FontAwesomeIcon icon={icons.chevronDown} className="text-[9px]" />
            </button>
            {eventMenuOpen && (
              <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3">
                <div className="overflow-hidden border border-ink-800/8 bg-white py-1 shadow-lg">
                  {eventLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm font-medium normal-case ${
                          isActive ? "text-primary-600" : "text-ink-700"
                        } hover:bg-surface-100 hover:text-primary-600`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink to={paths.gallery} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.gallery")}
          </NavLink>
          <NavLink to={paths.partners} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.partners")}
          </NavLink>
          <NavLink to={paths.contact} className={({ isActive }) => navLinkClass(isActive)}>
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="flex shrink-0 items-center gap-4 sm:gap-5">
          <LinkButton to={paths.register} size="sm" className="hidden sm:inline-flex">
            {t("header.cta")}
          </LinkButton>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-ink-800 min-[1400px]:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={mobileOpen ? icons.close : icons.bars} className="text-xl" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-ink-800/8 bg-white px-5 pb-8 pt-4 shadow-lg min-[1400px]:hidden">
          <nav className="flex flex-col gap-1">
            {[
              { to: paths.home, label: t("nav.home") },
              { to: paths.about, label: t("nav.about") },
              { to: paths.gastronomy, label: t("nav.gastronomy") },
              { to: paths.programmes, label: t("nav.programmes") },
              { to: paths.chefs, label: t("nav.chefs") },
              { to: paths.countries, label: t("nav.countries") },
              { to: paths.calendar, label: t("nav.calendar") },
              { to: paths.dashboard, label: t("nav.dashboard") },
              { to: paths.gallery, label: t("nav.gallery") },
              { to: paths.partners, label: t("nav.partners") },
              { to: paths.contact, label: t("nav.contact") },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-3 text-base font-semibold ${isActive ? "bg-surface-100 text-primary-600" : "text-ink-700"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-5 border-t border-ink-800/8 pt-5">
            <LinkButton to={paths.register} size="sm">
              {t("header.cta")}
            </LinkButton>
          </div>
        </div>
      )}
    </header>
  );
}
