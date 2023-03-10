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
          <div className="mt-3 mb-4 text-sm">Last updated: 5 Mars 2023</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>Kastrup, Copenhagen,</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>6°C, sunny</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span> <span>Hyperfocus - Shawn "@swyx"</span>
            <br />
            <span className="font-semibold">Podcast:</span> <span>Danny Miranda</span>
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
            I spent this last three weeks to help make the{' '}
            <Link
              href={'https://tiffin.dk'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Tiffin
            </Link>{' '}
            project go live in Copenhagen. We did so many things over this last week to make our
            systems ready. It's not perfect but we took the big step to start serving customers. So
            if you'r company is in the need of a delicious and various lunch and you are in the
            vicinity of Vesterbro reach out.🥳🥳🥳
          </p>
          <br />
          <p>
            Our new router is also live. Well, at least the first version of it. We decided to split
            to few versions. The reason for that is that we are a small team of three developers, so
            it is expensive time wise to keep tasks ongoing for too long. We also wanted to leverage
            a part of this new router to improve the UX on our site for the Copenhagen launch. My
            mental model regarding this new way of structuring router and the data fetching is
            always getting clearer. I look forward to continuing to refactoring our code to to use
            more of this new react-router version.
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
          <br />
          <p>
            I'm not very experienced at writing code in TypeScript but, I want to improve so this is
            a grate opportunity to get better. The guys who build the gigOver site did a good job
            and I hope that I'm not ruining the codebase too much with my sloppy TS code 😬.
          </p>
        </div>
        <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          {/* <p>
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
          <br /> */}
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
          <br />I wrote a post about the system I built in Obsidian. You can read it{' '}
          <Link
            href={'http://einargudni.com/my-books'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            here.
          </Link>{' '}
          It's not the best system in the world but it helps me a lot to keep control over the
          things I want to do. I recommend that you read it and try out Obsidian to make your own
          system.
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
