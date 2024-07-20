import { Metadata } from "next";
import ChangeReasonPage from "./page";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Důvody změny",
    description: "Stránka popisuje důvody změny dodavatele elektrické energie",
  };
}

const Layout: React.FC = () => {
  return <ChangeReasonPage />;
};

export default Layout;
