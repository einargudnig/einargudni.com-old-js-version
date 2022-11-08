// this is for the database!
import { useInsert, useRealTime } from 'react-supabase'

const TABLE_NAME = 'useTechnology'

export function useClicks() {
  const [{ data, error }] = useRealTime(TABLE_NAME, {
    select: {
      columns: 'id, type',
    },
  })

  if (error) {
    console.error(error)
  }

  return data
}

export function useInsertClicks() {
  //eslint-disable-next-line no-unused-vars
  const [_data, execute] = useInsert(TABLE_NAME)

  return execute
}
