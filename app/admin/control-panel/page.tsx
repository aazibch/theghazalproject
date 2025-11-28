'use client';

import { redirect, usePathname } from 'next/navigation';
import { useMediaQuery } from 'usehooks-ts';

import ControlPanelLayout from '@/components/control-panel/control-panel-layout';

export default function ControlPanelPage() {
  // const path = usePathname();
  // const matches = useMediaQuery('(width >= 48rem)');

  // if (path.endsWith('control-panel') && matches) {
  //   redirect('/admin/control-panel/collective-ghazal');
  // }

  return (
    <ControlPanelLayout>
      <p className="hidden">Settings Page</p>
    </ControlPanelLayout>
  );
}
