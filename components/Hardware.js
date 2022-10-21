import { useTechnologyClicks, useInsertTechnologyClicks } from '@/lib/utils/usesCount'
import { usePrevious } from 'react-use'

const hardware = [
  {
    type: 'macbook pro',
    text: 'I use this!',
    label: 'MacBook Pro',
  },
  {
    type: 'airpods pro',
    text: 'I use this!',
    label: 'Airpods Pro',
  },
  {
    type: 'sony wh-1000',
    text: 'I use this!',
    label: 'Sony WH-1000',
  },
  {
    type: 'mx master 3',
    text: 'I use this!',
    label: 'MX Master 3',
  },
  {
    type: 'keychron k4',
    text: 'I use this!',
    label: 'Keychron K4',
  },
  {
    type: 'keychron k3',
    text: 'I use this!',
    label: 'Keychron K3',
  },
  {
    type: 'kindle',
    text: 'I use this!',
    label: 'Kindle',
  },
  {
    type: 'asus 24',
    text: 'I use this!',
    label: 'Asus 24',
  },
]

export const Hardware = () => {
  const data = useTechnologyClicks()
  const prevData = usePrevious(data)
  const insertData = useInsertTechnologyClicks()
  const insertButton = (type) => () => insertData([{ type }])

  return (
    <div className="mt-4">
      <h3 className="text-center m-2 text-2xl">Hardware</h3>
      <div className="flex justify-center mt-4">
        {hardware.map((item) => {
          const countForType = data?.filter((d) => d.type === item.type).length || 0
          const prevCountForType = prevData?.filter((d) => d.type === item.type).length || 0

          return (
            <>
              <span>{item.label}</span>
              <button
                onClick={insertButton(item.type)}
                key={item.type}
                className="m-2 p-2 transition border rounded-lg shadow-md"
              >
                <span>{item.text}</span>
              </button>
              <span>{countForType}</span>
            </>
          )
        })}
      </div>
    </div>
  )
}
