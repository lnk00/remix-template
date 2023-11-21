import { Links, LiveReload, Meta, Outlet, Scripts } from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node'; // or cloudflare/deno
import styles from './style.css';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
