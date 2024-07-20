import { Metadata } from "next";
import ChangeProcessPage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Proces změny",
    description:
      "Stránka popisuje proces změny dodavatele v energetickém sektoru",
  };
}

const Layout: React.FC = () => {
  return <ChangeProcessPage />;
};

export default Layout;
