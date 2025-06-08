"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { i18n, LocaleKey } from "@/lib/i18n/config";
import { Icons } from "@/components/ui/icons";

interface LanguageSwitcherProps {
  locale: LocaleKey;
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter();
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "";

  // Get the path without the locale
  const getPathWithoutLocale = () => {
    const pathParts = currentPath.split("/");
    // Remove the first empty string and locale
    pathParts.splice(0, 2);
    return "/" + pathParts.join("/");
  };

  // Create a path with a new locale
  const createPathWithLocale = (newLocale: LocaleKey) => {
    return `/${newLocale}${getPathWithoutLocale()}`;
  };

  // Get the display name for the current locale
  const getCurrentLocaleDisplayName = () => {
    return i18n.localeNames[locale] || locale;
  };

  return (
    <DropdownMenu data-oid="8q:pv.r">
      <DropdownMenuTrigger asChild data-oid="irr41-e">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2"
          data-oid="2v9uzvk"
        >
          <Icons.globe className="h-4 w-4" data-oid="jds.lcx" />
          <span className="hidden md:inline-block" data-oid="bontz-z">
            {getCurrentLocaleDisplayName()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="c3xlhem">
        {Object.entries(i18n.localeNames).map(([localeKey, localeName]) => (
          <DropdownMenuItem key={localeKey} asChild data-oid="bvzkk0r">
            <Link
              href={createPathWithLocale(localeKey as LocaleKey)}
              className={locale === localeKey ? "font-medium" : ""}
              data-oid="a-.p6jb"
            >
              {localeName}
              {locale === localeKey && (
                <Icons.check className="ml-2 h-4 w-4" data-oid="c.z.aig" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
