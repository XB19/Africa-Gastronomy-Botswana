import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../lib/icons";
import { PageHero } from "../components/ui/PageHero";
import { Container } from "../components/ui/Container";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Button } from "../components/ui/Button";
import { faqs } from "../data/faq";
import { foodImages, pick } from "../lib/images";

export default function Contact() {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        kicker={t("contactPage.hero.kicker")}
        title={t("contactPage.hero.title")}
        image={pick(foodImages, 33)}
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-800">{t("contactPage.detailsTitle")}</h3>
              <div className="mt-5 flex flex-col gap-4">
                <a href="mailto:info@africagastronomybotswana.com" className="flex items-center gap-3 text-ink-600 hover:text-primary-600">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-600">
                    <FontAwesomeIcon icon={icons.envelope} />
                  </span>
                  info@africagastronomybotswana.com
                </a>
                <a href="tel:+2670000000" className="flex items-center gap-3 text-ink-600 hover:text-primary-600">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-600">
                    <FontAwesomeIcon icon={icons.phone} />
                  </span>
                  +267 000 0000
                </a>
                <div className="flex items-center gap-3 text-ink-600">
                  <span className="flex h-10 w-10 items-center justify-center bg-primary-50 text-primary-600">
                    <FontAwesomeIcon icon={icons.location} />
                  </span>
                  Gaborone International Convention Centre, Gaborone, Botswana
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                {[icons.facebook, icons.instagram, icons.x, icons.linkedin, icons.whatsapp].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-800/10 text-ink-600 hover:border-primary-400 hover:text-primary-600"
                  >
                    <FontAwesomeIcon icon={icon} className="text-sm" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex aspect-[4/3] items-center justify-center bg-ink-800 text-surface-100/40">
              <div className="flex flex-col items-center gap-2 text-center">
                <FontAwesomeIcon icon={icons.location} className="text-3xl text-primary-400" />
                <span className="text-sm">{t("contactPage.mapTitle")} — Gaborone, Botswana</span>
              </div>
            </div>
          </div>

          <div className="border border-ink-800/8 bg-white p-8 sm:p-10">
            <h3 className="font-display text-xl font-semibold text-ink-800">{t("contactPage.formTitle")}</h3>
            {submitted ? (
              <div className="mt-6 flex flex-col items-center gap-3 bg-forest-500/10 p-8 text-center">
                <FontAwesomeIcon icon={icons.check} className="text-3xl text-forest-500" />
                <p className="font-semibold text-ink-800">Thank you — your message has been sent.</p>
                <p className="text-sm text-ink-500">Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form
                className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
                  {t("contactPage.form.name")}
                  <input required type="text" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-primary-400 focus:outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700">
                  {t("contactPage.form.email")}
                  <input required type="email" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-primary-400 focus:outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700 sm:col-span-2">
                  {t("contactPage.form.subject")}
                  <input required type="text" className="border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-primary-400 focus:outline-none" />
                </label>
                <label className="flex flex-col gap-1.5 text-sm font-semibold text-ink-700 sm:col-span-2">
                  {t("contactPage.form.message")}
                  <textarea required rows={5} className="resize-none border border-ink-800/15 px-4 py-3 text-sm font-normal focus:border-primary-400 focus:outline-none" />
                </label>
                <Button type="submit" icon={icons.send} className="sm:col-span-2 sm:w-fit">
                  {t("contactPage.form.submit")}
                </Button>
              </form>
            )}
          </div>
        </Container>
      </section>

      <section className="bg-surface-200/50 py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading title={t("contactPage.faqTitle")} align="center" className="mx-auto" />
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={faq.question} className="overflow-hidden border border-ink-800/8 bg-white">
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-ink-800">{faq.question}</span>
                  <FontAwesomeIcon
                    icon={icons.chevronDown}
                    className={`shrink-0 text-primary-500 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && <p className="px-6 pb-5 text-sm leading-relaxed text-ink-500">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
