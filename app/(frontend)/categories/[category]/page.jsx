import DynamicGallery from '@/section/Category'

// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const category = decodeURIComponent(params.category)

  const capitalizedCategory =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()

  const baseUrl = 'https://clickkmaster.in/client/' + category

  return {
    title: `${capitalizedCategory} Photography | Clickkmaster`,
    description: `Explore stunning ${capitalizedCategory.toLowerCase()} photography by Clickkmaster across Delhi, Jaipur, Lucknow, and North India.`,
    alternates: {
      canonical: baseUrl,
    },
    openGraph: {
      title: `${capitalizedCategory} Photography | Clickkmaster`,
      description: `Professional ${capitalizedCategory.toLowerCase()} photography portfolio featuring events, portraits, and products in North India.`,
      url: baseUrl,
      siteName: 'Clickkmaster',
      images: [
        {
          url: 'https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg',
          width: 1200,
          height: 630,
          alt: `${capitalizedCategory} Photography`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${capitalizedCategory} Photography | Clickkmaster`,
      description: `Book professional ${capitalizedCategory.toLowerCase()} photography in Delhi, Jaipur, Lucknow, and more.`,
      images: [
        'https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg',
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
  }
}

export default function CategoryPage({ params }) {
  const { category } = params

  return (
    <main className="min-h-screen p-4">
      <DynamicGallery folder={category} />
    </main>
  )
}
