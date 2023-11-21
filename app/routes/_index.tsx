import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { DatabaseClient } from '~/utils/prisma.server';

export async function loader() {
  const user = await DatabaseClient.user.findFirst();
  return json(user);
}

export default function Landing() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl">
        Welcome {user?.name}, you are registered with {user?.email}
      </h1>
    </div>
  );
}
