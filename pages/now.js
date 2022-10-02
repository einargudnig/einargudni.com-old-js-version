import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Now() {
  return (
    <>
      <PageSEO
        title={`Now - ${siteMetadata.author}`}
        description="What I'm working on now"
        url={siteMetadata.url}
      />
      <div>
        <div className="my-2">
          <h3>Where am I and what am I doing?</h3>
          <div className="mt-3 mb-4 text-sm">Last updated: 28 September 2022</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>The Coffe Colletive,</span>{' '}
            <br />
            <span>Copenhagen</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>10°C, cloudy</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span>{' '}
            <span>The Idiot Brain - Dean Burnett</span>
            <br />
            <span className="font-semibold">Podcast:</span> <span>The Fantasy Footballers</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>N/A</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Coffe</span>
          </div>
        </div>
        {/* Work */}
        <div className="pb-4">
          <span>
            I work as a software developer at{' '}
            <Link
              href={'https://maul.is'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Maul{' '}
            </Link>
            <br />
          </span>
          <p>We deliver various and delicous lunch to workplaces in Reykjavík.</p>
          <br />
          <p>
            We at Maul strive to improve the quality of your lunch by offering courses from multiple
            restaurants and saving you from the constant "what should I have for lunch" conundrum.
          </p>
          <br />
          <p>
            At this moment I'm mostly using technology such as React, Tailwind, AWS lambda, S3, and
            more. We recently started to migrate to Vercel from AWS S3
          </p>
          <br />
          <p>
            I recently started a project to update a part of our data to match our new data model.
            It's not the most fun project to do, but it's important for us to finish this project.
          </p>
          <p>It will help us a lot in regard to other projects we have.</p>
          <br />
          <p>
            I finished the TypeScript basics course and I've started on the Everyday TypeScript
            course on{' '}
            <Link
              href={'https://www.executeprogram.com/courses'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Execute Programming.
            </Link>
          </p>
          <p>
            I like the execute programming method of courses since they use spaced-repition. I
            believe that is on of the best way to learn.
          </p>
        </div>
        <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I've been slowly building this website, trying to share interesting things with anyone
            who wants to read it.{' '}
            <Link
              href={'https://www.swyx.io/learn-in-public'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              This
            </Link>{' '}
            article is a great reason to start your blog.
          </p>
          <br />
          <p>
            I published a short e-book about how to make LaTeX templates for your homework, aimed
            towards beginners.
            <Link
              href={'http://einargudni.com/my-books'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              It's available here.
            </Link>
          </p>
          <br />
          <p>
            I went to Oktoberfest in Munich with some friend, I though it would be fun to make a
            drink counter and a bingo!
          </p>
          <br />
          {''}
          <p>
            You can see the live webpage{' '}
            <Link
              href={'https://oktoberfest22.vercel.app/'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              here.
            </Link>{' '}
          </p>
          <p>
            If you want to read more details about this project you can do that soon. I will release
            a post about it this next week.
          </p>
        </div>
        <div className="mt-3 text-sm">
          For more examples of folks with /now pages, check out{' '}
          <Link
            href={'https://nownownow.com/'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            nownownow.com
          </Link>
        </div>
      </div>
    </>
  )
}
