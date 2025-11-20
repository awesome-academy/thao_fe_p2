import SessionProvider from '../components/providers/SessionProvider';
import { ToastProviders } from '../components/providers/ToastProvider';
import NavigationLoadingProvider from '../components/providers/NavigationLoadingProvider';
import NavigationProgressBar from '../components/common/NavigationProgressBar';
import QueryProvider from '../components/providers/QueryProvider';
import '../globals.css';
import { getDictionary } from '../lib/get-dictionary';
import { getSupportedLocales } from '../lib/i18n-config';
import CreateI18nProvider from './i18n-provider';
import LanguageSwitcher from '@/app/components/common/LanguageSwitcher';
import Header from './RenderHeader';
import Footer from './RenderFooter';

import { Suspense } from 'react';
import Loading from '../components/common/Loading';

export async function generateStaticParams() {
  const locales = getSupportedLocales();
  return locales.map((locale) => ({ locale }));
}

export default async function RenderLocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as 'en' | 'vi');

  return (
    <html lang={locale}>
      <body>
        <Suspense fallback={null}>
          <NavigationProgressBar />
        </Suspense>
        <QueryProvider>
          <SessionProvider>
            <Suspense fallback={<Loading variant="dots" text="Loading..." />}>
              <NavigationLoadingProvider>
                <CreateI18nProvider locale={locale} dictionary={dictionary}>
                  <div className="min-h-screen bg-white font-inter flex flex-col">
                    <header className="border-b border-gray-200 bg-white">
                      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                        <LanguageSwitcher dictionary={dictionary} />
                      </div>
                    </header>
                    <Header
                      locale={locale as 'en' | 'vi'}
                      dictionary={dictionary}
                    />
                    <main className="grow">
                      <ToastProviders>{children}</ToastProviders>
                    </main>
                    <Footer dictionary={dictionary} />
                  </div>
                </CreateI18nProvider>
              </NavigationLoadingProvider>
            </Suspense>
          </SessionProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
