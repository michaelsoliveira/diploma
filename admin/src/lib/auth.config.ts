import { NextAuthConfig } from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google'
import { redirect } from 'next/dist/server/api-utils';

const GOOGLE_AUTHORIZATION_URL =
  'https://accounts.google.com/o/oauth2/v2/auth?' +
  new URLSearchParams({
    prompt: 'consent',
    access_type: 'offline',
    response_type: 'code',
  });


const authConfig = {
  providers: [
    GithubProvider({}),
    GoogleProvider({}),
    CredentialProvider({
      credentials: {
        email: {
          type: 'email'
        },
        password: {
          type: 'password'
        }
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials.password) {
            return null;
          }

          const res: any = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: 'POST',
              body: JSON.stringify(credentials),
              headers: { 'Content-Type': 'application/json' },
            }
          );

          const response = await res.json().then((data: any) => {
              const { error, message, user } = data
              if (!error) {
                return {
                  error,
                  local: true,
                  ...user,
                }
              }

              return {
                error,
                message,
                user
              }
            })
            .catch((res: any) => {
              return res;
            });
            // If no error and we have user data, return it
            if (res.ok && response) {
              return response;
            }
          return null;
        } catch (error: any) {
          const errorMessage = error;
          throw new Error(`${errorMessage}&email=${credentials?.email}`);
        }

        // const user = {
        //   id: '1',
        //   name: 'John',
        //   email: credentials?.email as string
        // };
        // if (user) {
        //   // Any object returned will be saved in `user` property of the JWT
        //   return user;
        // } else {
        //   // If you return null then an error will be displayed advising the user to check their details.
        //   return null;

        //   // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        // }
      }
    })
  ],
  pages: {
    signIn: '/' //sigin page
  }
} satisfies NextAuthConfig;

export default authConfig;
