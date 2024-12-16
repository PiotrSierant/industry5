"use client";
import { useCopyToClipboardEldora } from "@/hooks/useCopyToClipboard";
import { ClipboardIcon } from "lucide-react";
import { toast } from "sonner";

export function CommandCode({ children }: Readonly<{ children: string }>) {
  const [copiedText, copy] = useCopyToClipboardEldora();
  const handleCopyCode = (_code: string) => {
    copy(children);
    toast.success(`Command copied: ${copiedText}`);
  };
  return (
    <button
      className="flex transform-gpu items-center justify-between gap-5 rounded-full bg-fuchsia-300/20 px-5 py-3 tracking-tighter text-fuchsia-800 transition-all hover:bg-fuchsia-300/15 active:scale-90 active:bg-fuchsia-300/30 dark:text-fuchsia-400"
      onClick={() => handleCopyCode(children)}
      type="button"
    >
      <code className=" truncate text-left">{children}</code>
      <ClipboardIcon className=" size-5" />
    </button>
  );
}