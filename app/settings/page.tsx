'use client';

import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import { redirect, usePathname } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

export default function SettingsPage() {
  const path = usePathname();
  const matches = useMediaQuery('(width >= 48rem)');

  if (path.endsWith('settings') && matches) {
    redirect('/settings/profile');
  }

  return (
    <SettingsLayout>
      <p className="hidden">Settings Page</p>
    </SettingsLayout>
  );
}
