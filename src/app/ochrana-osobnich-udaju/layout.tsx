import { Metadata } from "next";
import DataPrivacyPage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Ochrana osobních údajů",
    description: "Stránka popisuje podmínky ochrany osobních údajů",
  };
}

const Layout: React.FC = () => {
  return <DataPrivacyPage />;
};

export default Layout;
