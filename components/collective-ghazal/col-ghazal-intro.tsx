'use client';

import { scrollToPageBottom } from '@/lib/utils';

export default function ColGhazalIntro() {
  const handleScrollToBottomButtonClick = () => {
    scrollToPageBottom();
  };

  return (
    <p className="mb-8">
      This poem has been written by users from all over the world.{' '}
      <button
        onClick={handleScrollToBottomButtonClick}
        className="font-medium text-blue-600 hover:underline"
      >
        Scroll all the way to the bottom
      </button>{' '}
      to learn more or to contribute.
    </p>
  );
}