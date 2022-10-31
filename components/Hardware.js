import { useTechnologyClicks, useInsertTechnologyClicks } from '@/lib/utils/usesCount'
import { usePrevious } from 'react-use'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from './social-icons'
import UsesIcon from './uses-icons'

const hardware = [
  {
    type: 'macbook pro',
    text:
      'MacBook Pro 2022 14" M1 max, 64GB RAM, 1TB SSD. This feels like a forever machine. I love it.',
    button: 'I use this!',
    label: 'MacBook Pro',
    link: '',
    icon: <UsesIcon kind="laptop" size="10" />,
  },
  {
    type: 'airpods pro',
    text:
      'Recently upgraded from the Nothing Ear 1, the ease of changing between devices while listening is great.',
    button: 'I use this!',
    label: 'Airpods Pro',
    link: '',
    icon: <UsesIcon kind="airpods" size="10" />,
  },
  {
    type: 'sony wh-1000',
    text:
      'I bought these in 2018 and they are still going strong, probably one of my most used purchases.',
    button: 'I use this!',
    label: 'Sony WH-1000',
    link: '',
    icon: <UsesIcon kind="headphones" size="10" />,
  },
  {
    type: 'mx master 3',
    text: 'Super lightweight and comfortable',
    button: 'I use this!',
    label: 'MX Master 3',
    link: '',
    icon: <UsesIcon kind="mouse" size="10" />,
  },
  {
    type: 'keychron k4',
    text: 'This is my work keyboard with gateron reds. It is nice to type on.',
    button: 'I use this!',
    label: 'Keychron K4',
    link: '',
    icon: <UsesIcon kind="keyboard" size="10" />,
  },
  {
    type: 'keychron k3',
    text:
      'I use this one at home, I like how small the form factor is, it is easy to move around with it.',
    button: 'I use this!',
    label: 'Keychron K3',
    link: '',
    icon: <UsesIcon kind="keyboard" size="10" />,
  },
  {
    type: 'iphone',
    text:
      'Not the newest one, but it does the job! I am trying to be conscious about alway jumping on the newest thing, hence why I am still using this one. I am tempted at upgrading to the new Iphone 14 Pro',
    button: 'I use this!',
    label: 'Iphone XR',
    link: '',
    icon: <UsesIcon kind="iphone" size="10" />,
  },
  {
    type: 'kindle',
    text:
      'Like many others, I am trying to read more, the Kindle helps with that. It is also nice that I can import my highlights to Obsidian.',
    button: 'I use this!',
    label: 'Kindle',
    link: '',
    icon: <UsesIcon kind="kindle" size="10" />,
  },
  {
    type: 'asus 24',
    text:
      'My external monitor at home, I am thinking about upgrading to a bigger one, but this one does the job and has nothing wrong with it. It is so nice to have an external monitor.',
    button: 'I use this!',
    label: 'Asus 24',
    link: '',
    icon: <UsesIcon kind="monitor" size="10" />,
  },
  {
    type: 'garmin',
    text:
      'I have been wearing this watch for the last 2 years, the reason why I chose it over the apple watch was the battery life. It has 4-5 days of battery life which is great. I also use the body battery metric to see how well I recover',
    button: 'I use this!',
    label: 'Garmin Venu',
    link: '',
    icon: <UsesIcon kind="smartwatch" size="10" />,
  },
  {
    type: 'camera',
    text:
      'I have been wearing this watch for the last 2 years, the reason why I chose it over the apple watch was the battery life. It has 4-5 days of battery life which is great. I also use the body battery metric to see how well I recover',
    button: 'I use this!',
    label: 'Canon EOS R6',
    link: '',
    icon: <UsesIcon kind="camera" size="10" />,
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
      <div className="mt-4">
        {hardware.map((item) => {
          const countForType = data?.filter((d) => d.type === item.type).length || 0
          const prevCountForType = prevData?.filter((d) => d.type === item.type).length || 0

          return (
            <>
              <div className="flex">
                <div className="m-2">{item.icon}</div>
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
