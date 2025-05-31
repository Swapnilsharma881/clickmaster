import DynamicGallery from '@/section/DynamicGallery'

export default function CategoryPage({ params }) {
  const { category } = params

  return (
    <main className="min-h-screen p-4">
      <DynamicGallery folder={category} />
    </main>
  )
}
