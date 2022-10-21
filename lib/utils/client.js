import { createClient } from '@supabase/supabase-js'
import { Provider } from 'react-supabase'

const client = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default client

export function SupabaseProvider({ children }) {
  return <Provider value={client}>{children}</Provider>
}
