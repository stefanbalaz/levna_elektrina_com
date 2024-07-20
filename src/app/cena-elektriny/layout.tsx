import { Metadata } from "next";
import ElectricityPricePage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cena elektřiny",
    description: "Stránka popisuje vývoj cen dodavatelů elektrické energie",
  };
}

const Layout: React.FC = () => {
  return <ElectricityPricePage />;
};

export default Layout;
