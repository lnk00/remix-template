// app.d.ts
/// <reference types="lucia" />
declare namespace Lucia {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  type Auth = import('./app/utils/lucia.server').Auth;
  type DatabaseUserAttributes = {};
  type DatabaseSessionAttributes = {};
}
