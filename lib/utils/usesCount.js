import { useInsert, useRealtime } from 'react-supabase'

const TABLE_NAME = 'useTechnology'

export function useTechnologyClicks() {
  const [{ data, error }] = useRealtime(TABLE_NAME, {
    select: {
      columns: 'id, created_at, type',
    },
  })

  if (error) {
    console.error(error)
  }

  return data
}

export function useInsertTechnologyClicks() {
  // eslint-disable-next-line no-unused-vars
  const [_data, execute] = useInsert(TABLE_NAME)

  return execute
}
