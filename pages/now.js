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
          <div className="mt-3 mb-4 text-sm">Last updated: 2 May 2023</div>
        </div>
        {/* Misc */}
        <div className="flex justify-between">
          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Location:</span> <span>Budapest, Hungary,</span>
            <br />
            <span className="font-semibold">Weather:</span> <span>18°C, sunny</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-2/5">
            <span className="font-semibold">Reading:</span> <span>Hyperfocus - Tim Urban</span>
            <br />
            <span className="font-semibold">Podcast:</span> <span>Huberman Lab</span>
          </div>

          <div className="text-sm p-1 mt-2 mb-10 border border-gray-600 dark:border-gray-200 rounded-md w-1/4">
            <span className="font-semibold">Eating:</span> <span>N/A</span>
            <br />
            <span className="font-semibold">Drinking:</span> <span>Water</span>
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
          <p>We deliver various and delicious lunch to workplaces in Reykjavík.</p>
          <br />
          <p>
            We at Maul strive to improve the quality of your lunch by offering courses from multiple
            restaurants and saving you from the constant "what should I have for lunch" conundrum.
          </p>
          <br />
          <p>
            <Link
              href={'https://tiffin.dk'}
              className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
            >
              Tiffin
            </Link>{' '}
            is live in Copenhagen. So if you're company is in the need of a delicious and various
            lunch and you are in the vicinity of Vesterbro reach out. 🥳🥳🥳 I've been spending the
            last couple of weeks working on our internal tools. Retool works great for that, it
            allows us to iterate quickly. It was almost a surprise how important it is to have good
            reliable internal tools. It's a lot of fun to work on them and see how much they help
            the company.
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
            I've been building a Procurement system for them. It has been up and down but it's
            getting better and better. It always surprise me a bit the scope of projects. It's easy
            to overlook a part of it and for it to grow. I think it matters a lot to have the scope
            as well defined as you can!
          </p>
          <br />
          <p>
            I'm not very experienced at writing in TypeScript but, I want to improve so this is a
            grate opportunity to get better. The guys who build the gigOver site did a good job and
            I hope that I'm not ruining the codebase too much with my sloppy TS code 😬.
          </p>
        </div>
        <div className="font-medium text-2xl justify-center dark:text-gray-600 text-gray-200 text-center">
          &#126;&#126;&#126;
        </div>

        {/* Personal life */}
        <div className="pt-6">
          <p>
            I'm working on building a fun little feature on this site. I'll post more about it soon!
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
          <br />I wrote a post about the system I built in Obsidian. You can read it{' '}
          <Link
            href={'http://einargudni.com/blog/obsidian/obsidian-v2'}
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
