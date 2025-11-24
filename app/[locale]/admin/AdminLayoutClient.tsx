'use client';

import React from 'react';
import type { DictType } from '@/app/lib/types/dictType';
import Sidebar from './components/Sidebar';

interface AdminLayoutClientProps {
  children: React.ReactNode;
  locale: 'en' | 'vi';
  dictionary: DictType;
}

export default function AdminLayoutClient({
  children,
  locale,
  dictionary,
}: AdminLayoutClientProps) {
  return (
    <div className="min-h-screen bg-slate-50 font-inter flex">
      <Sidebar dictionary={dictionary} locale={locale} />
      <div className="flex-1 lg:ml-64">{children}</div>
    </div>
  );
}
