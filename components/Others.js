import { useTechnologyClicks, useInsertTechnologyClicks } from '@/lib/utils/usesCount'
import { usePrevious } from 'react-use'
import Image from './Image'

const other = [
  {
    type: 'aeropress',
    text:
      'I usually start my day with a cup of coffee made with this. I have bee playing around with different recipes and brewing methods.',
    button: 'I use this!',
    label: 'Aeropress',
    link: '',
    image: '/static/images/uses/aerorpress.jpeg',
  },
  {
    type: 'timemore',
    text: 'A lot of people say you should get agood grinder, so I did!',
    button: 'I use this!',
    label: 'Timemore C2 Grinder',
    link: '',
    image: '/static/images/uses/timemore.webp',
  },
]

export const Other = () => {
  const data = useTechnologyClicks()
  const prevData = usePrevious(data)
  const insertData = useInsertTechnologyClicks()
  const insertButton = (type) => () => insertData([{ type }])

  return (
    <div className="mt-4">
      <h3 className="text-center m-2 text-2xl">Other</h3>
      <div className="mt-4">
        {other.map((item) => {
          const countForType = data?.filter((d) => d.type === item.type).length || 0
          const prevCountForType = prevData?.filter((d) => d.type === item.type).length || 0

          return (
            <>
              <div className="flex">
                <div className="m-2">
                  <Image
                    src={item.image}
                    alt="vsCode"
                    width="40px"
                    height="40px"
                    className="w-24 h-24"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="flex-col">
                      <div className="">
                        <h4 className="font-semibold text-lg" key={item.label}>
                          {item.label}
                        </h4>
                      </div>
                      <p className="">{item.text}</p>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xl font-bold mx-3">{countForType}</span>
                      <button
                        onClick={insertButton(item.type)}
                        key={item.type}
                        className="m-2 p-2 transition border rounded-lg shadow-md w-24"
                      >
                        <span>{item.button}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}
