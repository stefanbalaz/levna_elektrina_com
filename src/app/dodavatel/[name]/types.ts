// types.ts

export interface Provider {
  id: number;
  name: string;
  nameShort: string;
  slug: string;
  logo: string;
  link: string;
  descriptionShort: string;
  descriptionOne: string;
  descriptionTwo: string;
}

export interface ProviderDetailPageProps {
  provider: Provider;
}

// types.ts
export interface BulletPoint {
  headline: string;
  text: string;
}

export interface BulletPointsProps {
  bullets?: BulletPoint[];
  className?: string;
}
