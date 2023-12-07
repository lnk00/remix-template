import { json, type LoaderFunctionArgs } from '@remix-run/node';
import { isUserAuthenticatedWithCookie } from '~/utils/authentication.server';

export async function loader({ request }: LoaderFunctionArgs) {
  await isUserAuthenticatedWithCookie(request);
  return json({});
}

export default function Landing() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl">Welcome !</h1>
    </div>
  );
}
