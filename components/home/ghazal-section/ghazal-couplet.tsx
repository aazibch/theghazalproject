import { Avatar } from 'flowbite-react';
import Link from 'next/link';

interface UserObj {
  avatar: string;
  fullName: string;
  username: string;
}

type Couplet = [string, string];

export default function GhazalCouplet({
  user,
  couplet,
  id
}: {
  user: UserObj;
  couplet: Couplet;
  id?: string;
}) {
  return (
    <div
      id={id}
      className="flex flex-col-reverse md:flex-row items-center justify-center mb-6 mx-auto text-center"
    >
      <Link
        className="text-inherit no-underline hover:no-underline"
        href={`/users/${user.username}`}
      >
        <div className="md:basis-[8rem] md:mr-2 flex flex-row md:flex-col items-center">
          <Avatar rounded img={user.avatar} className="mr-2 md:mr-0 md:mb-1" />

          <span className="text-sm text-gray-600">{user.fullName}</span>
        </div>
      </Link>

      <div className="font-merriweather font-light md:basis-[26rem] mb-4 text-[0.9rem] sm:text-base">
        <span className="block mb-1">{couplet[0]}</span>
        <span className="block">{couplet[1]}</span>
      </div>
    </div>
  );
}
