import { Metadata } from "next";
import ProviderPage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Dodavatelé energie",
    description: "Stránka obsahuje seznam dodavatelů energie",
  };
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export default Layout;
