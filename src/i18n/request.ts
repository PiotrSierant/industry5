import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

import { locales } from "../config"

// Can be imported from a shared config

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (
      await (locale === "pl"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../messages/pl.json")
        : import(`../../messages/${locale}.json`))
    ).default,
  }
})
