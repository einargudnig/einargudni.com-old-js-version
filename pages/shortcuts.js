import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Shortcuts() {
  let [categories] = useState({
    Mac: [
      {
        id: 1,
        shortcut: 'Command + P',
        description: 'Quick switcher',
      },
      {
        id: 2,
        shortcut: 'Command + Shift + P',
        description: 'Show command pallette',
      },
      {
        id: 3,
        shortcut: 'Command + K Command + S',
        description: 'Show keyboard shortcuts',
      },
      {
        id: 4,
        shortcut: 'Command + W',
        description: 'Close tab',
      },
      {
        id: 5,
        shortcut: 'Command + ,',
        description: 'User settings',
      },
      {
        id: 6,
        shortcut: 'Command + N',
        description: 'New tab',
      },
      {
        id: 7,
        shortcut: 'Option + up / down',
        description: 'Move line up or down',
      },
    ],
    Windows: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
      },
    ],
  })

  return (
    <>
      <PageSEO
        title={`Shortcuts - ${siteMetadata.author}`}
        description="List of Keyboard shortcuts"
        url={siteMetadata.url}
      />
      <div>
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li key={post.id} className="relative rounded-md p-3 hover:bg-gray-100">
                        <h3 className="text-sm font-medium leading-5">{post.shortcut}</h3>

                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                          <li>{post.description}</li>
                          <li>&middot;</li>
                        </ul>

                        <a
                          href="#"
                          className={classNames(
                            'absolute inset-0 rounded-md',
                            'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  )
}
