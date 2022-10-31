import { useTechnologyClicks, useInsertTechnologyClicks } from '@/lib/utils/usesCount'
import { usePrevious } from 'react-use'
import Image from './Image'
// import

const software = [
  {
    type: 'vscode',
    text:
      'My editor of choice, I am using the Catpuccinn Mocha theme. I have been using it for couple of months.',
    button: 'I use this!',
    label: 'VS Code',
    link: '',
    image: '/static/images/uses/vscode.png',
  },
  {
    type: 'warp',
    text:
      'I have been trying this terminal out and I can say that I am very happy with it. It is fast and has a lot of features.',
    button: 'I use this!',
    label: 'Warp',
    link: '',
    image: '/static/images/uses/warp.png',
  },
  {
    type: 'obsidian',
    text:
      'I honestly cannot put it into words how much I love this app. My system there is helping me a lot, but it is not perfect. Tools for thought like obsidian are such an interesting concept.',
    button: 'I use this!',
    label: 'Obsidian',
    link: '',
    image: '/static/images/uses/obsidian.png',
  },
  {
    type: 'cron',
    text:
      'Recently scored an invite to try this calendar out. It is fantastic, I use it to schedule my days with the time blocking method. I can not wait for the ios app to come out.',
    button: 'I use this!',
    label: 'Cron',
    link: '',
    image: '/static/images/uses/cron.png',
  },
  {
    type: 'raycast',
    text:
      'My finder replacement, what I most like is the customizability and the option to add extensions.',
    button: 'I use this!',
    label: 'Raycast',
    link: '',
    image: '/static/images/uses/raycast.png',
  },
  {
    type: '1password',
    text:
      '1 password managare to rule them all! It is super nice to have two separate vaults, one for work and one for personal. But, still easy to access both of them',
    button: 'I use this!',
    label: '1Password',
    link: '',
    image: '/static/images/uses/1password.png',
  },
  {
    type: 'spotify',
    text: 'No better place to stream the lo-fi beats and the electro house',
    button: 'I use this!',
    label: 'Spotify',
    link: '',
    image: '/static/images/uses/spotify.png',
  },
  {
    type: 'postman',
    text: 'I use this to test my APIs, nothing new here.',
    button: 'I use this!',
    label: 'Postman',
    link: '',
    image: '/static/images/uses/postman.png',
  },
  {
    type: 'anki',
    text: 'I have been using this for spaced repitition from my Obsidian vault',
    button: 'I use this!',
    label: 'Anki',
    link: '',
    image: '/static/images/uses/anki.png',
  },
  {
    type: 'figma',
    text: 'Who does not love to put something reasonably nice together?',
    button: 'I use this!',
    label: 'Figma',
    link: '',
    image: '/static/images/uses/figma.png',
  },
  {
    type: 'excalidraw',
    text: 'I am always drawn more and more towards this to scribble down ideas and diagrams',
    button: 'I use this!',
    label: 'Excalidraw',
    link: '',
    image: '/static/images/uses/excalidraw.png',
  },
  {
    type: 'rescuetime',
    text:
      'I use rescuetime to block apps when I want to be more productive. I find it also interesting to see how much time I spend on different apps',
    button: 'I use this!',
    label: 'RescueTime',
    link: '',
    image: '/static/images/uses/rescuetime.png',
  },
  {
    type: 'loom',
    text:
      'Loom is great for screen recording, we have been using it at work and want to use it more.',
    button: 'I use this!',
    label: 'Loom',
    link: '',
    image: '/static/images/uses/loom.png',
  },
  {
    type: 'typist',
    text:
      'I stumble into this app couple of time a week to make sure I continue to get better at typing, see more here: ',
    button: 'I use this!',
    label: 'Typist',
    link: '',
    image: '/static/images/uses/typist.png',
  },
]

export const Software = () => {
  const data = useTechnologyClicks()
  const prevData = usePrevious(data)
  const insertData = useInsertTechnologyClicks()
  const insertButton = (type) => () => insertData([{ type }])

  return (
    <div className="mt-4">
      <h3 className="text-center m-2 text-2xl">Software</h3>
      <div className="mt-4">
        {software.map((item) => {
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
