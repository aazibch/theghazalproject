'use client';

import { Button } from 'flowbite-react';
import { IoIosArrowDown } from 'react-icons/io';

export default function ScrollToBottomButton() {
  const handleClick = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      onClick={handleClick}
      color="light"
      className="fixed bottom-10 right-10"
      pill
    >
      <IoIosArrowDown size={24} />
    </Button>
  );
}
