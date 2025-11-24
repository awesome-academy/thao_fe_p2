import { getDictionary } from '@/app/lib/get-dictionary';
import AdminLayoutClient from './AdminLayoutClient';

export default async function RenderAdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'vi';
  const dictionary = await getDictionary(localeTyped);

  return (
    <AdminLayoutClient locale={localeTyped} dictionary={dictionary}>
      {children}
    </AdminLayoutClient>
  );
}
