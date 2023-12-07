import { redirect } from '@remix-run/node';
import { auth } from './lucia.server';

export async function isUserAuthenticatedWithCookie(request: Request) {
  const authRequest = auth.handleRequest(request);
  const session = await authRequest.validate();
  if (!session) {
    throw redirect('/signin');
  }
}

export async function createSessionAndRedirect(userId: string, url: string) {
  const session = await auth.createSession({
    userId: userId,
    attributes: {},
  });

  const sessionCookie = auth.createSessionCookie(session);

  return redirect(url, {
    headers: {
      'Set-Cookie': sessionCookie.serialize(),
    },
  });
}
