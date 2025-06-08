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
    <DropdownMenu data-oid="78ro8r-">
      <DropdownMenuTrigger asChild data-oid="5z:_dn4">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2"
          data-oid="tqc0t5y"
        >
          <Icons.globe className="h-4 w-4" data-oid="1xkwn2l" />
          <span className="hidden md:inline-block" data-oid="gy.4-3b">
            {getCurrentLocaleDisplayName()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="81x.0r0">
        {Object.entries(i18n.localeNames).map(([localeKey, localeName]) => (
          <DropdownMenuItem key={localeKey} asChild data-oid="mr9v53r">
            <Link
              href={createPathWithLocale(localeKey as LocaleKey)}
              className={locale === localeKey ? "font-medium" : ""}
              data-oid="_-4xtw8"
            >
              {localeName}
              {locale === localeKey && (
                <Icons.check className="ml-2 h-4 w-4" data-oid="xi9qf72" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
