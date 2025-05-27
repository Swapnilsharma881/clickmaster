import { supabase } from '../../lib/supabaseClient'

export default function Home({ testData }) {
  return (
    <div>
      <h1>Supabase Test</h1>
      {testData.length > 0 ? (
        <ul>
          {testData.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  )
}

export async function getServerSideProps() {
  const { data, error } = await supabase.from('test_data').select('*')

  if (error) {
    console.error('Supabase error:', error)
  }

  return {
    props: {
      testData: data || [],
    },
  }
}
