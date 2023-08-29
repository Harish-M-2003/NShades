import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
} from "next-auth";
// import DiscordProvider from "next-auth/providers/discord";
import Credentials from "next-auth/providers/credentials";

import { env } from "@/env.mjs";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}


export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub,
      },
    }),
  },
  providers: [
    Credentials(
      {
      name : "Credentails",
      
      credentials : {
         
          username : {
              label : "username",
              type : "text",
              placeholder : "username : ",
          },
          password : {
              label : "Password",
              type : "password",
              placeholder : " password",
          }
      },

      async authorize(credentials) {
          const user = { name : "harishm" , password : "123"}
          if (credentials?.username === user.name && credentials?.password === user.password){
              return user
          }
          else{
              return null
          }
      },
})
    
    ]
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
