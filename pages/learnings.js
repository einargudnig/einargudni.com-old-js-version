import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import learninsData from '../data/learningsData'

export default function Learnings() {
  return (
    <>
      <PageSEO
        title={`Curiosity - ${siteMetadata.author}`}
        description="What I'm curious about"
        url={siteMetadata.url}
      />
      <div>
        <div className="flex-col justify-center items-center">
          <div>
            <h2 className="text-xl font-semibold mx-auto">Learnings journal</h2>
          </div>
          <div>
            <span className="font-semibold">Doings and learnings. What am I curious about??</span>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div>
          {learninsData.map((i) => (
            <>
              <h2 key={i.date} className="text-xl">
                Week of {i.date}
              </h2>
              <div className="flex flex-row">
                <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
                  {' '}
                  &#8227;
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{i.learnings1}</p>
                {/* //eslint-disable-next-line */}
                <p className="text-lg"> - </p>
                <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
                  <Link href={'https://beta.reactrouter.com/en/dev/route/route'}>
                    {i.learnings1Link}
                  </Link>
                </p>
              </div>
              <div className="flex flex-row">
                <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
                  {' '}
                  &#8227;
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-lg">{i.learnings2}</p>
                {/* //eslint-disable-next-line */}
                <p className="text-lg"> - </p>
                <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
                  <Link href={'https://beta.reactrouter.com/en/dev/route/route'}>
                    {i.learnings2Link}
                  </Link>
                </p>
              </div>
            </>
          ))}
          <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div>
          <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div>
          <div>
            <h2 className="text-xl">
              Week of February 27<sup>th</sup>, 2023
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">React router v4.6</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://beta.reactrouter.com/en/dev/route/route'}>Link</Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Yerkes-dodson law</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law'}>Link</Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">The paradox of effort</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://www.scotthyoung.com/blog/2020/11/09/the-paradox-of-effort/'}>
                Link
              </Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Writing well</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://www.julian.com/guide/write/intro'}>Link</Link>
            </p>
          </div>
          <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div>
        </div>
      </div>
    </>
  )
}

{
  /* <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div>
          <div>
            <h2 className="text-xl">
              Week of February 27<sup>th</sup>, 2023
            </h2>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">React router v4.6</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://beta.reactrouter.com/en/dev/route/route'}>Link</Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Yerkes-dodson law</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://en.wikipedia.org/wiki/Yerkes%E2%80%93Dodson_law'}>Link</Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">The paradox of effort</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://www.scotthyoung.com/blog/2020/11/09/the-paradox-of-effort/'}>
                Link
              </Link>
            </p>
          </div>
          <div className="flex flex-row">
            <div className="text-primary-color dark:text-primary-color-dark mr-2 text-lg">
              {' '}
              &#8227;
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-lg">Writing well</p>
            <p className="text-lg"> - </p>
            <p className="dark:text-gray-400 hover:text-blue-600 hover:dark:text-yellow-300 text-lg">
              <Link href={'https://www.julian.com/guide/write/intro'}>Link</Link>
            </p>
          </div>
          <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
            &#126;&#126;&#126;
          </div> */
}
