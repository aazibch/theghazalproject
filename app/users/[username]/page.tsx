import { getUser } from '@/lib/actions';

export default async function UserPage({
  params
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);

  console.log('[UserPage] user', user);

  return <h1>User Page: {params.username}</h1>;
}
