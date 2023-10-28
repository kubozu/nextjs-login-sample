import Login from "@/components/login";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";

import SessionProvider from "@/components/session-provider";
import { Noto_Sans_JP } from "next/font/google";
import { authOptions } from "./api/auth/[...nextauth]/route";
import "./globals.css";

const noto = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth検証プロジェクト",
  description: "NextAuth(Auth)を利用した認証機能を検証する",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //sessionがあるかどうかで表示を変える
  const session = await getServerSession(authOptions);

  return (
    <html lang="ja">
      <body className={noto.className}>
        <SessionProvider>{!session ? <Login /> : children}</SessionProvider>
      </body>
    </html>
  );
}
