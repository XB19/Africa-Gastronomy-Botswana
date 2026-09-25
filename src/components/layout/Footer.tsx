import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../lib/icons";
import { paths } from "../../router/paths";
import { Container } from "../ui/Container";
import logo from "../../assets/brand/logo.png";

export function Footer() {
  const { t } = useTranslation();

  const exploreLinks = [
    { to: paths.about, label: t("nav.about") },
    { to: paths.gastronomy, label: t("nav.gastronomy") },
    { to: paths.chefs, label: t("nav.chefs") },
    { to: paths.programmes, label: t("nav.programmes") },
    { to: paths.gallery, label: t("nav.gallery") },
  ];

  const quickLinks = [
    { to: paths.countries, label: t("nav.countries") },
    { to: paths.calendar, label: t("nav.calendar") },
    { to: paths.dashboard, label: t("nav.dashboard") },
    { to: paths.uganda, label: t("nav.uganda") },
    { to: paths.partners, label: t("nav.partners") },
    { to: paths.contact, label: t("nav.contact") },
  ];

  const socialLinks = [
    icons.facebook,
    icons.instagram,
    icons.x,
    icons.linkedin,
    icons.youtube,
    icons.whatsapp,
  ];

  return (
    <footer className="bg-ink-800 text-surface-100">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Africa Gastronomique Botswana" className="h-11 w-11" />
            <span className="font-display text-base font-bold text-surface-50">FIGA Botswana 2026</span>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-surface-100/65">{t("footer.address")}</p>
          <a href="/FIGA-Botswana-2026-Sponsoring-Dossier.pdf" download className="text-sm font-semibold text-primary-400 hover:text-primary-300">
            {t("common.downloadBrochure")}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-400">
            {t("footer.explore")}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {exploreLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="text-sm text-surface-100/70 hover:text-surface-50">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-400">
            {t("footer.quickLinks")}
          </h3>
          <ul className="mt-5 flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className="text-sm text-surface-100/70 hover:text-surface-50">
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-primary-400">Follow Us</h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {socialLinks.map((icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center border border-surface-100/15 text-surface-100/80 transition-colors hover:border-primary-400 hover:text-primary-400"
                aria-label="social link"
              >
                <FontAwesomeIcon icon={icon} className="text-sm" />
              </a>
            ))}
          </div>
          <a href="tel:+26772486352" className="mt-5 block text-sm text-surface-100/70 hover:text-surface-50">
            {t("footer.phone")}
          </a>
          <a href="tel:+26771452085" className="mt-2 block text-sm text-surface-100/70 hover:text-surface-50">
            {t("footer.phone2")}
          </a>
        </div>
      </Container>

      <div className="border-t border-surface-100/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 text-xs text-surface-100/55 sm:flex-row">
          <span>© {new Date().getFullYear()} Africa Gastronomique Botswana. {t("footer.rights")}</span>
          <span>{t("meta.eventName")} · {t("meta.dates")} · {t("meta.location")}</span>
        </Container>
      </div>
    </footer>
  );
}
