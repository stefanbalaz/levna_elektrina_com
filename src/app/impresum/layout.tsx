import { Metadata } from "next";
import ImpresumPage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Impresum",
    description: "Stránka obsahuje údaje o provozovateli webu",
  };
}

const Layout: React.FC = () => {
  return <ImpresumPage />;
};

export default Layout;
