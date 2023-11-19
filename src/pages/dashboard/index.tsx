import { ThemeContext } from "@/context/ThemeContext";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useContext } from "react";

export default function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className={`theme theme-${theme} h-screen`}>
        <span>tu jest dashboard</span>
        {session && <span>zalogowany: {session?.user.email}</span>}
      </main>
    </>
  );
}
