import Products from "@/section/Portfolio";

export const metadata = {
  title: "Photography Portfolio | Clickkmaster",
  description:
    "Explore the Clickkmaster portfolio featuring candid moments, product shoots, events, portraits, and more across Delhi, Jaipur, and Lucknow.",
  alternates: {
    canonical: "https://clickkmaster.in/portfolio",
  },
  openGraph: {
    title: "Photography Portfolio | Clickkmaster",
    description:
      "A curated collection of event, portrait, and product photography by Clickkmaster across North India.",
    url: "https://clickkmaster.in/portfolio",
    siteName: "Clickkmaster",
    images: [
      {
        url: "https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clickkmaster Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photography Portfolio | Clickkmaster",
    description:
      "Professional photography portfolio featuring events, portraits, and products in North India.",
    images: [
      "https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

const Portfolio = () => {
  return <Products />;
};

export default Portfolio;
