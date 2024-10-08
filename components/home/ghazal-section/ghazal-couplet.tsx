import { Avatar } from 'flowbite-react';

interface UserObj {
  avatar: string;
  username: string;
}

type Couplet = [string, string];

export default function GhazalCouplet({
  user,
  couplet
}: {
  user: UserObj;
  couplet: Couplet;
}) {
  return (
    <div className="flex items-center justify-center mb-6 mx-auto">
      <div className="basis-[8rem] mr-2">
        <Avatar rounded img={user.avatar} />
        <span className="text-sm text-gray-600">{user.username}</span>
      </div>
      <div className="font-merriweather font-light basis-[25rem]">
        <span className="block mb-1">{couplet[0]}</span>
        <span className="block">{couplet[1]}</span>
      </div>
    </div>
  );
}
