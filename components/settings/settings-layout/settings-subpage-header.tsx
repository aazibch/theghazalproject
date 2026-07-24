import SubpageHeader from '@/components/layout/pages/subpage-header';

export default function SettingsSubpageHeader({
  heading
}: {
  heading: string;
}) {
  return <SubpageHeader heading={heading} />;
}
