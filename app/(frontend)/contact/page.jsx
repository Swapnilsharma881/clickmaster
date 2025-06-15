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
// This page is a Server Component, but it can include Client Components like InquiryForm
// without needing 'use client' at the top level.
// The InquiryForm component can handle client-side interactions like form submission.
// This allows you to keep the benefits of server-side rendering while still using client-side features where necessary.
// The metadata is set up for SEO and social sharing, ensuring the page is indexed correctly.
// The InquiryForm component can be a separate file in the ui directory, handling the form logic and submission.
// This approach keeps the page clean and focused on its primary purpose: providing a contact form for users to reach out.
// The metadata includes Open Graph and Twitter Card data for better visibility on social media platforms.
// The page is structured to be SEO-friendly, with clear titles and descriptions.
// The main function returns the InquiryForm component wrapped in a main element with padding for styling.
// This structure allows for easy expansion in the future, such as adding more sections or components if needed.
// The page is designed to be responsive and user-friendly, ensuring a good experience on both desktop and mobile devices.
// The metadata is designed to be dynamic, allowing for easy updates in the future if needed.
// The page can be easily extended with additional components or sections as needed.
// The use of Tailwind CSS classes ensures a consistent and modern design across the application.
// The page is ready for deployment and can be tested locally to ensure all components work as expected.  