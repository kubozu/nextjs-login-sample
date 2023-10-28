import NextAuth from "next-auth";
import GithubProviders from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProviders({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  // pages: {
  //     signIn: "/auth/signin",
  //     signOut: "/auth/signout",
  //     error: "/auth/error",
  //     verifyRequest: "/auth/verify-request",
  //     newUser: "/auth/new-user",
  // },
  // callbacks: {
  //     async session(session, user) {
  //     session.user.id = user.id
  //     return session
  //     },
  //     async jwt(token, user, account, profile, isNewUser) {
  //     if (user) {
  //         token.id = user.id
  //     }
  //     return token
  //     },
  // },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
