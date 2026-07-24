import SubpageHeader from '@/components/layout/pages/subpage-header';

export default function ControlPanelSubpageHeader({
  heading
}: {
  heading: string;
}) {
  return <SubpageHeader heading={heading} />;
}
