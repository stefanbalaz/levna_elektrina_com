import { notFound } from "next/navigation";
import { Metadata } from "next";
import { providers } from "../../data/providers";
import ProviderDetailPage from "./page"; // Import default export
import { Provider } from "./types"; // Import interfaces

type Props = {
  params: { name: string };
};

export async function generateStaticParams() {
  return providers.map((p) => ({ name: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name: slug } = params;
  const provider = providers?.find((p) => p.slug === slug);
  if (!provider) {
    notFound();
  }

  return {
    /*   title: provider.name, */
    title: `${provider.name} - Levná Elektřina`,
    description: provider.descriptionShort,
    openGraph: {
      images: [{ url: provider.logo }],
    },
  };
}

export default function Layout({ params }: Props): JSX.Element {
  const { name: slug } = params;
  console.log("PARAMS:", params);
  const provider = providers?.find((p) => p.slug === slug);

  if (!provider) {
    notFound();
  }

  return <ProviderDetailPage provider={provider as Provider} />;
}
