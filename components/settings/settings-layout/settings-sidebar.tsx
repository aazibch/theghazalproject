'use client';

import SidebarNav from '@/components/layout/pages/sidebar-nav';
import { HiOutlineCog6Tooth, HiOutlineUserCircle } from 'react-icons/hi2';

export default function SettingsSidebar() {
  return (
    <SidebarNav
      label="Settings sidebar"
      items={[
        {
          href: '/settings/profile',
          label: 'Profile',
          icon: HiOutlineUserCircle,
          hiddenOn: ['profile', 'account']
        },
        {
          href: '/settings/account',
          label: 'Account',
          icon: HiOutlineCog6Tooth,
          hiddenOn: ['profile', 'account']
        }
      ]}
      hiddenOn={['profile', 'account']}
    />
  );
}
