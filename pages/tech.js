import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'

const people = [
  { name: 'Einar gudni', type: 'frontend', work: 'maul', openWork: false },
  { name: 'Einar', type: 'frontend', work: 'maul', openWork: true },
  { name: 'gudni', type: 'frontend', work: 'maul', openWork: false },
  { name: 'Ei', type: 'frontend', work: 'maul', openWork: false },
  { name: 'udni', type: 'frontend', work: 'maul', openWork: false },
  { name: 'ar gudni', type: 'frontend', work: 'maul', openWork: false },
  { name: 'Eini', type: 'frontend', work: 'maul', openWork: false },
  { name: 'Einsi', type: 'frontend', work: 'maul', openWork: false },
  { name: 'Jona gudrun', type: 'backend', work: 'bati', openWork: true },
  { name: 'gudrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'Jona', type: 'backend', work: 'bati', openWork: false },
  { name: 'Jonagudrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'na gudrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'Jonrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'Jonun', type: 'backend', work: 'bati', openWork: true },
  { name: 'Jodrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'Jon', type: 'backend', work: 'bati', openWork: false },
  { name: 'ona gudrun', type: 'backend', work: 'bati', openWork: false },
  { name: 'drun', type: 'backend', work: 'bati', openWork: true },
]

export default function Tech() {
  return (
    <>
      <PageSEO />
      <div>
        <div>
          <h3>List of people</h3>
          <div>
            Container for list
            <div className="m-2" border-2 border-white>
              <ul className="">
                {people.map((p) => {
                  return (
                    <li
                      key={p.name}
                      className="border-2 rounded-md p-1 m-1 hover:border-primary-color dark:hover:border-primary-color-dark"
                    >
                      {/* <Link href={`/tech/${p.name}`}> */}
                      <Link href={'/tech/results'}>
                        <div className="flex">
                          <div className="w-3/6">
                            <span className="mx-1 font-mono dark:text-gray-600 text-gray-200">
                              name:{' '}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">{p.name}</span>
                          </div>
                          <div className="mx-1">|</div>
                          <div className="w-1/6">
                            <span className="mx-1 font-mono dark:text-gray-600 text-gray-200">
                              type:{' '}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">{p.type}</span>
                          </div>
                          <div className="mx-1">|</div>
                          <div className="w-2/6">
                            <span className="mx-1 font-mono dark:text-gray-600 text-gray-200">
                              work:{' '}
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">{p.work}</span>
                            {p.openWork ? <span className="justify-end">yes</span> : null}
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Link href={'/tech-stats'}>Container for stats</Link>
        </div>
        <div className="mt-4">
          <button className="border-2 rounded-md p-2 m-1 hover:border-primary-color dark:hover:border-primary-color-dark">
            <Link href={'/tech-questions'}>I want to answer!</Link>
          </button>
        </div>
      </div>
    </>
  )
}
