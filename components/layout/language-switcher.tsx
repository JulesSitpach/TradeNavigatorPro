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
    <DropdownMenu data-oid="j:wxyqv">
      <DropdownMenuTrigger asChild data-oid="05gfig_">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 px-2"
          data-oid="l23f4-j"
        >
          <Icons.globe className="h-4 w-4" data-oid="ltxa4sv" />
          <span className="hidden md:inline-block" data-oid="8egf_f9">
            {getCurrentLocaleDisplayName()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" data-oid="f3.m:2z">
        {Object.entries(i18n.localeNames).map(([localeKey, localeName]) => (
          <DropdownMenuItem key={localeKey} asChild data-oid="klufu5k">
            <Link
              href={createPathWithLocale(localeKey as LocaleKey)}
              className={locale === localeKey ? "font-medium" : ""}
              data-oid="dgbbjws"
            >
              {localeName}
              {locale === localeKey && (
                <Icons.check className="ml-2 h-4 w-4" data-oid="81yuczk" />
              )}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
