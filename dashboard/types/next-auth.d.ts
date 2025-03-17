import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken?: string;
    refreshToken?: string;
  }

  interface CredentialsInputs {
    email: string;
    password: string;
  }
}
