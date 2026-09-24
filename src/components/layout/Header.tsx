import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { LinkButton } from "../ui/Button";
import { EASE } from "../motion/ease";
import logo from "../../assets/brand/logo.png";

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [eventMenuOpen, setEventMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setEventMenuOpen(false);
  }, [location.pathname]);

  const navLinkClass = (isActive: boolean) =>
    `group relative shrink-0 whitespace-nowrap py-2 text-[12.5px] font-semibold uppercase tracking-normal transition-colors ${
      isActive ? "text-primary-600" : "text-ink-700 hover:text-primary-600"
    }`;

  // Active link gets an underline that glides between items on navigation;
  // inactive links grow a thin one on hover.
  const navLabel = (label: string, isActive: boolean) => (
    <>
      {label}
      {isActive ? (
        <motion.span
          layoutId="nav-underline"
          className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary-500"
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
        />
      ) : (
        <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-primary-300 transition-transform duration-300 group-hover:scale-x-100" />
      )}
    </>
  );

  const eventLinks = [
    { to: paths.countries, label: t("nav.countries") },
    { to: paths.calendar, label: t("nav.calendar") },
    { to: paths.dashboard, label: t("nav.dashboard") },
  ];

  // The info bar scrolls away with the page; the sticky bar below keeps a
  // constant height (only its shadow changes) so content never jumps.
  return (
    <>
      <div className="hidden border-b border-ink-800/8 bg-surface-100 lg:block">
        <div className="mx-auto flex max-w-8xl items-center justify-end gap-2 px-5 py-2 text-xs text-ink-500 sm:px-8 lg:px-12">
          <FontAwesomeIcon icon={icons.location} className="text-[10px] text-primary-500" />
          <span>{t("header.topbar")}</span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b bg-white/95 backdrop-blur-md transition-[box-shadow,border-color] duration-300 ${
          scrolled ? "border-transparent shadow-lg shadow-ink-900/8" : "border-ink-800/8"
        }`}
      >
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
              {({ isActive }) => navLabel(t("nav.home"), isActive)}
            </NavLink>
            <NavLink to={paths.about} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.about"), isActive)}
            </NavLink>
            <NavLink to={paths.gastronomy} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.gastronomy"), isActive)}
            </NavLink>
            <NavLink to={paths.programmes} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.programmes"), isActive)}
            </NavLink>
            <NavLink to={paths.chefs} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.chefs"), isActive)}
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
                <FontAwesomeIcon
                  icon={icons.chevronDown}
                  className={`text-[9px] transition-transform duration-300 ${eventMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {eventMenuOpen && (
                  <motion.div
                    className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-3"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2, ease: EASE }}
                  >
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to={paths.gallery} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.gallery"), isActive)}
            </NavLink>
            <NavLink to={paths.partners} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.partners"), isActive)}
            </NavLink>
            <NavLink to={paths.contact} className={({ isActive }) => navLinkClass(isActive)}>
              {({ isActive }) => navLabel(t("nav.contact"), isActive)}
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <FontAwesomeIcon icon={mobileOpen ? icons.close : icons.bars} className="text-xl" />
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="overflow-hidden border-t border-ink-800/8 bg-white shadow-lg min-[1400px]:hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-5 pb-8 pt-4">
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
                  ].map((link, i) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, ease: EASE, delay: 0.04 * i }}
                    >
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `block px-3 py-3 text-base font-semibold transition-colors ${
                            isActive ? "bg-surface-100 text-primary-600" : "text-ink-700 hover:bg-surface-100"
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
                <div className="mt-5 border-t border-ink-800/8 pt-5">
                  <LinkButton to={paths.register} size="sm">
                    {t("header.cta")}
                  </LinkButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
