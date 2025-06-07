import { Metadata } from 'next';
import { getDictionary, type LocaleKey } from '@/lib/i18n/config';

// Generate metadata for SEO
export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  
  // Add your metadata logic here
  return {
    description: 'Marketing page description'
  };
}

// Marketing landing page component
export default async function MarketingPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.common;
  const apps = dictionary.apps;

  return (
    <div>
      {/* Your page content here */}
      <h1>{t.appName}</h1>
      <p>{t.tagline}</p>
      {/* Rest of your component */}
    </div>
  );
}
