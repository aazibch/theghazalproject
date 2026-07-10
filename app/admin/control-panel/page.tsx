import { notFound } from 'next/navigation';

import { getValidServerSession } from '@/lib/auth';
import config from '@/app/api/auth/[...nextauth]/config';
import ControlPanel from '@/components/control-panel/control-panel';

export default async function ControlPanelPage() {
  const session = await getValidServerSession(config);

  if (!session) {
    notFound();
  }

  return <ControlPanel />;
}
// TODO: Create a better setup for protecting pages, possibly via middleware
