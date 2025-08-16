// ❌ DO NOT write 'use client' here – this must be a Server Component

import InquiryForm from "@/ui/InquiryForm"; // This can stay as a Client Component

export const metadata = {
  title: "Contact Clickkmaster - Book a Photography Session",
  description:
    "Get in touch with Clickkmaster to book photography for your events, portraits, or products in Delhi, Jaipur, Lucknow, and across North India.",
  alternates: {
    canonical: "https://clickkmaster.in/contact",
  },
  openGraph: {
    title: "Contact Clickkmaster",
    description: "Reach out to Clickkmaster for professional photography services.",
    url: "https://clickkmaster.in/contact",
    siteName: "Clickkmaster",
    images: [
      {
        url: "https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Clickkmaster",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Clickkmaster",
    description: "Reach out to Clickkmaster for photography services across North India.",
    images: [
      "https://kqoiszdheczrpsfxutiw.supabase.co/storage/v1/object/public/personal//og-image.jpg",
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="p-4">
      <InquiryForm /> {/* ✅ Still works even if it's a client component */}
    </main>
  );
}
