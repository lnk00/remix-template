import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { isUserAuthenticatedWithCookie } from '~/utils/authentication.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await isUserAuthenticatedWithCookie(request);
  return json(session.user);
}

export default function Landing() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">Welcome !</h1>
      <h2 className="text-2xl pt-6">You are connected with {user.email}</h2>
    </div>
  );
}
