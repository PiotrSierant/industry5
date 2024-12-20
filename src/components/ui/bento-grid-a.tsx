import { cn } from "@/lib/utils"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input from-muted/20 to-muted row-span-1 flex flex-col justify-between space-y-4  rounded-xl border border-purple-500/80 bg-gradient-to-b p-4 transition duration-200 hover:shadow-xl dark:shadow-none",
        className
      )}
    >
      {header}
      <div className="text-balance text-left transition duration-200 group-hover/bento:translate-x-2">
        {/* {icon} */}
        <div className="my-2 font-sans font-bold text-black dark:text-white">{title}</div>
        <div className="font-sans text-base font-normal">{description}</div>
      </div>
    </div>
  )
}
