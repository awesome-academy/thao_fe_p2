import { Suspense } from 'react';
import { getDictionary } from '../lib/get-dictionary';
import HeroSection from './RenderHeroSection';
import ServicesSection from './RenderServicesSection';
import TrendingPackagesSection from './RenderTrendingPackagesSection';
import RenderHeroSectionSkeleton from '../components/sekeleton/RenderHeroSectionSkeleton';
import TrendingPackagesSkeleton from '../components/sekeleton/TrendingPackagesSkeleton';

type Props = {
  params: Promise<{ locale: 'en' | 'vi' }>;
};

export default async function RenderHomePage({ params }: Props) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero Section với Suspense */}
      <Suspense fallback={<RenderHeroSectionSkeleton />}>
        <HeroSection dictionary={dictionary} />
      </Suspense>

      <ServicesSection dictionary={dictionary} />

      {/* Trending Packages Section với Suspense */}
      <Suspense fallback={<TrendingPackagesSkeleton />}>
        <TrendingPackagesSection dictionary={dictionary} locale={locale} />
      </Suspense>
    </>
  );
}
