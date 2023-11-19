import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

type TTab = {
  id: string;
  title: string;
};

type TTabsContext = {
  tabs: TTab[];
  activeTab: string;
  openTab: (tab: TTab) => void;
  closeTab: (tab: TTab) => void;
  switchTab: (tab: TTab) => void;
};

const initialContext: TTabsContext = {
  tabs: [],
  activeTab: "",
  openTab: (tab: TTab) => {},
  closeTab: (tab: TTab) => {},
  switchTab: (tab: TTab) => {},
};

export const TabsContext = createContext(initialContext);

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [tabs, setTabs] = useState<TTab[]>([]);
  const [activeTab, setActiveTab] = useState<string>("");

  const openTab = (tab: TTab) => {
    setTabs((prev) =>
      prev.find((el) => el.id === tab.id) ? prev : [...prev, tab],
    );
    setActiveTab(tab.id);
    router.push(`/${tab.id}`);
  };

  const closeTab = (tab: TTab) => {
    setTabs((prev) => prev.filter((el) => el.id !== tab.id));
    const tabToOpenId = tabs.findIndex((el) => el.id === tab.id);
    const tabToOpen = tabs[tabToOpenId - 1];
    if (tab.id === activeTab) {
      setActiveTab(tabToOpen ? tabToOpen.id : "");
      router.push(tabToOpen ? `/${tabToOpen.id}` : "/");
    }
  };

  const switchTab = (tab: TTab) => {
    setActiveTab(tab.id);
    router.push(`/${tab.id}`);
  };

  const contextValue = {
    tabs,
    activeTab,
    openTab,
    closeTab,
    switchTab,
  };

  return (
    <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>
  );
};
