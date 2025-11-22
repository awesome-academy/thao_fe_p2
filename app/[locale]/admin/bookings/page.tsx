import { getDictionary } from '@/app/lib/get-dictionary';
import AdminBookingsClient from './AdminBookingsClient';

export default async function AdminBookingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeTyped = locale as 'en' | 'vi';
  const dictionary = await getDictionary(localeTyped);

  return <AdminBookingsClient locale={localeTyped} dictionary={dictionary} />;
}
