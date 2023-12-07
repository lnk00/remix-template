import { redirect } from '@remix-run/node';
import { auth } from './lucia.server';

export async function isUserAuthenticatedWithCookie(request: Request) {
  const authRequest = auth.handleRequest(request);
  const session = await authRequest.validate();
  if (!session) {
    throw redirect('/signup');
  }
}
