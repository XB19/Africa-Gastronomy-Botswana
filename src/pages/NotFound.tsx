import { useTranslation } from "react-i18next";
import { icons } from "../lib/icons";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/Button";
import { paths } from "../router/paths";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="flex min-h-[70vh] items-center py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <span className="font-display text-7xl font-bold text-terracotta-500">404</span>
        <h1 className="font-display text-2xl font-semibold text-ink-800">Page Not Found</h1>
        <p className="max-w-md text-ink-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <LinkButton to={paths.home} icon={icons.arrowRight}>
          {t("common.backHome")}
        </LinkButton>
      </Container>
    </section>
  );
}
