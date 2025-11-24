import { ReactNode } from 'react';
import LanguageSwitcher from '@/app/components/common/LanguageSwitcher';
import Header from './RenderHeader';
import Footer from './RenderFooter';
import LayoutContent from './LayoutContent';
import type { DictType } from '@/app/lib/types/dictType';

interface MainLayoutWrapperProps {
  children: ReactNode;
  locale: string;
  dictionary: DictType;
}

export default function MainLayoutWrapper({
  children,
  locale,
  dictionary,
}: MainLayoutWrapperProps) {
  return (
    <LayoutContent
      locale={locale}
      dictionary={dictionary}
      shouldShowLayout={true}
      headerComponent={
        <Header locale={locale as 'en' | 'vi'} dictionary={dictionary} />
      }
      footerComponent={<Footer dictionary={dictionary} />}
      languageSwitcher={<LanguageSwitcher dictionary={dictionary} />}
    >
      {children}
    </LayoutContent>
  );
}
