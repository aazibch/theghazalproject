import Image from 'next/image';

import serverErrorIllustration from '@/assets/images/server-error.svg';
import { ERROR_MESSAGES } from '@/constants';

export default function ServerErrorScreen() {
  return (
    <div className="text-center my-20 mx-4">
      <Image
        className="w-[35rem] m-auto mb-20"
        src={serverErrorIllustration}
        alt="Illustration showing a rounded figure holding a disconnected cable what was supposed to be running from the server to the computer"
        priority
      />
      <p className="text-lg text-gray-500">{ERROR_MESSAGES.generic}</p>
    </div>
  );
}
