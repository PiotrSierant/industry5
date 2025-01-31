"use client"

import React from "react"
import { useTheme } from "next-themes"

import { SparklesCore } from "./sparkles"

export function SparklesPreview() {
  const theme = useTheme()
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="relative z-20 text-center text-3xl font-bold text-black md:text-5xl lg:text-7xl dark:text-white">
        Contact
      </h1>
      <div className="relative h-40 w-[40rem]">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="size-full"
          particleColor={theme.theme == "light" ? "#000000" : "#FFFFFF"}
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="bg-background absolute inset-0 size-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}
