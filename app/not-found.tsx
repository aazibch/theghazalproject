import Image from 'next/image';
import notFoundIllustration from '@/assets/images/not-found.svg';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <div className="text-center my-20 mx-4">
      <Image
        className="w-[35rem] m-auto mb-20"
        src={notFoundIllustration}
        alt="Illustration showing a rounded figure holding a disconnected cable what was supposed to be running from the server to the computer"
        priority
      />
      <p className="text-lg text-gray-500 mb-4">
        Oh, oh! Looks like the page does not exist.
      </p>
      <p className="text-lg">
        <Link href="/">Return Home</Link>
      </p>
    </div>
  );
}
