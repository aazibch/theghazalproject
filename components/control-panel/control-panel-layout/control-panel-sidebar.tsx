'use client';

import SidebarNav from '@/components/layout/pages/sidebar-nav';
import { HiOutlineUserGroup } from 'react-icons/hi2';

export default function ControlPanelSidebar() {
  return (
    <SidebarNav
      label="Control panel sidebar"
      items={[
        {
          href: '/admin/control-panel/collective-ghazal',
          label: 'Collective Ghazal',
          icon: HiOutlineUserGroup,
          hiddenOn: ['collective-ghazal']
        }
      ]}
      hiddenOn={['collective-ghazal']}
    />
  );
}
