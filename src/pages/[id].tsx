import { TabsContext } from "@/context/TabsContext";
import { ThemeContext } from "@/context/ThemeContext";
import Head from "next/head";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function TabPage() {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const { tabs } = useContext(TabsContext);
  const tabToShow = tabs.find((tab) => tab.id === router.query.id);

  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className={`theme theme-${theme}`}>
        <div>{tabToShow?.title}</div>
      </main>
    </>
  );
}
