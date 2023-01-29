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
          <div className="mt-3 mb-4 text-sm">Last updated: 9 November 2022</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>Reykjavik,</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>4°C, sunny</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span>{' '}
            <span>Coding career Handbook - Shawn "@swyx"</span>
            <br />
            <span className="font-semibold">Podcast:</span> <span>Huberman Lab</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>N/A</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Coffee</span>
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
            We've been spending are getting ready to launch in Copenhagen 🥳. We have great people
            on the ground setting things up and getting ready. It's so much fun to take part in
            something like this. I'm really excited to see how it goes.
          </p>
          <br />
          <p>
            The biggest task I'm working on is re-writing our router. We use react-router like so
            many other websites, they release and interesting updates a while ago. This project is a
            big one, since it touches on a lot of things in our codebase. I think the new mental
            model with the actions and loader is way more clearer. The biggest pros in thise update
            is that it's going to remove some of the problems we have been dealing with.
          </p>
          <br />
          <p>
            You can read more about this new version of react-router here{' '}
            <Link
              href={'https://reactrouter.com/en/main/start/overview'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              react router version 6.4.
            </Link>
          </p>
          <p>
            I like the execute programming method of courses since they use spaced-repition. I
            believe that is on of the best way to learn.
          </p>
          <br />
          <p>
            I recently started working as a contractor for{' '}
            <Link
              href={'https://gigover.com'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              GigOver{' '}
            </Link>
          </p>
          <br />
          <p>
            It's an interesting project aimed to help construction workers be more on top of thei
            projects.
          </p>
          <br />
          <p>
            It's built in TypeScript, React, chakra-ui and react-query. I'm working on the frontend
            part of the project. They do also have an app built in Flutter. I don't have any
            experience with Flutter, but it would be fun to get experience and learn something new.
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
            I'm thinking about if I should start to re-write my blog to TypeScript. Like I mentioned
            I want to improve my TypeScript skill, so a real deliberate practice will help greatly.
            It will depend on what time I have. Since I started working as a contractor I have less
            extra time. But it would be a good project to work on it over longer time-period. Don't
            understimate the work done in small chunks but over long time.
          </p>
          <br />
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
