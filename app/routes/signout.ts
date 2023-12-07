import { type ActionFunctionArgs, redirect } from '@remix-run/node';
import { auth } from '~/utils/lucia.server';

export async function action({ request }: ActionFunctionArgs) {
  const authRequest = auth.handleRequest(request);
  const session = await authRequest.validate();
  if (!session) {
    throw redirect('/signin');
  }
  await auth.invalidateSession(session.sessionId);
  const sessionCookie = auth.createSessionCookie(null);

  return redirect('/signin', {
    headers: {
      'Set-Cookie': sessionCookie.serialize(),
    },
  });
}
