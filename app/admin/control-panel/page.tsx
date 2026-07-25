import { notFound } from 'next/navigation';

import { getValidServerSession } from '@/lib/auth';
import config from '@/app/api/auth/[...nextauth]/config';
import ControlPanel from '@/components/control-panel/control-panel';

export default async function ControlPanelPage() {
  return <ControlPanel />;
}
