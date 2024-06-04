import { unstable_setRequestLocale } from "next-intl/server"
import { MyLink } from "@/components/ui/link"
import { ArticleHeadingTitle } from "@/components/ui/link-anchor"
import { HeadingOneTitlePage } from "@/components/ui/heading"
import { ContainerPage } from "@/components/layout/ContainerPage"
import { useTranslations } from "next-intl"

export default function HistoryPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("History");
  return (
    <ContainerPage>
        <HeadingOneTitlePage>
            {t("titlePart1")} <br />
            {t("titlePart2")}
        </HeadingOneTitlePage>
        {/* scroll-mt-32 - spis tresci - linki i id dodac */}
        <article className="text-muted-foreground mb-6 px-0 lg:text-lg">
          <p className="mb-6 space-y-1 px-0 ">{t("p1")}</p>
          <p className="mb-12 space-y-1 px-0 ">{t("p2")}</p>
          <ArticleHeadingTitle text={t("head1")} />
          <p className="mb-12 space-y-1 px-0 ">{t("p3")}</p>
          <ArticleHeadingTitle text={t("head2")} />
          <p className="mb-6 space-y-1 px-0 ">{t("p4")}</p>
          <ul className="mb-12 list-inside list-disc space-y-1 px-0">
            <li><strong>{t("strong1")}</strong> {t("list1")}</li>
            <li><strong>{t("strong2")}</strong> {t("list2")}</li>
            <li><strong>{t("strong3")}</strong> {t("list3")}</li>
            <li><strong>{t("strong4")}</strong> {t("list4")}</li>
          </ul>
          <ArticleHeadingTitle text={t("head3")} />
          <p className="mb-6 space-y-1 px-0 ">{t("p5")}</p>
          <ul className="mb-12 list-inside list-disc space-y-1 px-0">
            <li><strong>{t("strong13")}</strong> {t("list13")}</li>
            <li><strong>{t("strong14")}</strong> {t("list14")}</li>
            <li><strong>{t("strong15")}</strong> {t("list15")}</li>
            <li><strong>{t("strong16")}</strong> {t("list16")}</li>
          </ul>
          <ArticleHeadingTitle text={t("head4")} />
          <p className="mb-6 space-y-1 px-0 ">{t("p6")}</p>
          <ul className="mb-12 list-inside list-disc space-y-1 px-0">
            <li><strong>{t("strong17")}</strong> {t("list17")}</li>
            <li><strong>{t("strong18")}</strong> {t("list18")}</li>
            <li><strong>{t("strong19")}</strong> {t("list19")}</li>
            <li><strong>{t("strong20")}</strong> {t("list20")}</li>
          </ul>
          <ArticleHeadingTitle text={t("head5")} />
          <p className="mb-6 space-y-1 px-0 ">{t("p7")}</p>
          <ul className="mb-12 list-inside list-disc space-y-1 px-0">
            <li><strong>{t("strong5")}</strong> {t("list5")}</li>
            <li><strong>{t("strong6")}</strong> {t("list6")}</li>
            <li><strong>{t("strong7")}</strong> {t("list7")}</li>
            <li><strong>{t("strong8")}</strong> {t("list8")}</li>
            <li><strong>{t("strong9")}</strong> {t("list9")}</li>
            <li><strong>{t("strong10")}</strong> {t("list10")}</li>
            <li><strong>{t("strong11")}</strong> {t("list11")}</li>
            <li><strong>{t("strong12")}</strong> {t("list12")}</li>
          </ul>
          <ArticleHeadingTitle text={t("head6")} />
          <p className="mb-6 space-y-1 px-0 ">{t("p8")}</p>
          <p className="mb-6 space-y-1 px-0 ">{t("p9")}</p>
          <MyLink href="/industry" text={t("link")} />
        </article>
      </ContainerPage>
  )
}
