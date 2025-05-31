'use client'
import { supabase } from '../../../lib/supabaseClient'
import { useEffect, useState } from 'react'

export default function FolderGallery({ folder }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchImages() {
      
      const bucketName = "media";
      const filePath = ""; // ✅ full path: "decor/"
      const { data, error } = await supabase.storage
        .from(bucketName)
        .list(filePath);

      if (error) {
        console.error('Failed to list files:', error.message)
      } else {
         // ✅ save listed files
        console.log('Fetched images:', data)  // Debugging: log fetched images
      }

      setLoading(false)
      return data;
    }

    const d = fetchImages()
  }, [folder])

  if (loading) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold capitalize mb-4">Category:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
      </div>
    </div>
  )
}
