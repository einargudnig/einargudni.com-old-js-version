import SocialIconNoHref from '@/components/social-icons/nonHref'

export default function TechQuestions() {
  return (
    <div>
      <div>
        <h2 className="text-lg mb-1">The state of technology in Iceland</h2>
        <p>
          This is just for information. Answer the questions with your best interest so that the
          data will show a better picture.
        </p>
        <div className="flex-col">
          <div className="m-1 p-2">
            <label className="mr-2">Name:</label>
            <input className="rounded-md h-10 border-1 border-red-600" placeholder="Einar gudni" />
          </div>
          <div className="m-1 p-2">
            <label className="mr-2">Are you a part of the Icelandic technology scene: </label>
            <checkbox />
            <p className="text-xs">
              Did you study in Iceland or do you work for an Icelandic company
            </p>
          </div>
          <div className="m-1 p-2">
            <label className="mr-2">Education:</label>
            <select className="rounded-md">
              <option>Diploma</option>
              <option>Other</option>
              <option>Self taught</option>
              <option>University</option>
            </select>
          </div>
          <div className="m-1 p-2">
            <label>
              What type of a developer would <strong>you</strong> say you are:{' '}
            </label>
            <select className="rounded-md">
              <option>Backend developer</option>
              <option>Fullstack developer</option>
              <option>Frontend developer</option>
            </select>
          </div>
          <div className="m-1 p-2">
            <label>In what programming language was the last piece of code you wrote: </label>
            <input className="rounded-md h-10" placeholder="TypeScript" />
          </div>
          <div className="m-1 p-2">
            <label>What technology do you most use on daily basis: </label>
            <input className="rounded-md h-10" />
          </div>
          <div className="m-1 p-2">
            <label>Work: </label>
            <input className="rounded-md h-10" placeholder="Maul" />
          </div>
          <div className="m-1 p-2">
            <label>Have you spent some time on personal-projects in the last year: </label>
            <select className="rounded-md">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <div className="m-1 p-2">
            <label>Are you thinking about changing jobs in the near future: </label>
            <select className="rounded-md">
              <option>No</option>
              <option>Yes</option>
            </select>
            <p className="text-xs">Near future being in the next 12-18 months</p>
          </div>
          <div className="m-1 p-2">
            <label>What are you excited about: </label>
            <input className="rounded-md h-10" placeholder="Vercel" />
          </div>
          <div className="m-1 p-2">
            <label>Where do you hear about new things: </label>
            <select className="rounded-md">
              <option>Articles</option>
              <option>Books</option>
              <option>Co-workers</option>
              <option>Twitter</option>
              <option>Friends</option>
              <option>Podcasts</option>
              <option>Other</option>
            </select>
          </div>
          <div className="m-1 p-2">
            <label>
              Operation system you <strong>most</strong> use:{' '}
            </label>
            <select className="rounded-md">
              <option>Linux</option>
              <option>macOs</option>
              <option>Windows</option>
            </select>
          </div>
          <div className="m-1 p-2">
            <label>One advice to give to others: </label>
            <input className="rounded-md h-10" placeholder="Never deploy on Fridays" />
          </div>
          <hr />
          <div className="m-1 p-2">
            <div className="m-1 flex space-x-2 items-center">
              <div className="flex">
                <SocialIconNoHref kind="external" size="5" />
                <label className="ml-2">Homepage: </label>
              </div>
              <input className="rounded-md h-10" />
            </div>

            <div className="m-1 flex space-x-2 items-center">
              <div className="flex">
                <SocialIconNoHref kind="twitter" size="5" />
                <label className="ml-2">Twitter: </label>
              </div>
              <input className="rounded-md h-10" />
            </div>

            <div className="m-1 flex space-x-2 items-center">
              <div className="flex">
                <SocialIconNoHref kind="linkedin" size="5" />
                <label className="ml-2">Linkedin: </label>
              </div>
              <input className="rounded-md h-10" />
            </div>

            <div className="m-1 flex space-x-2 items-center">
              <div className="flex">
                <SocialIconNoHref kind="github" size="5" />
                <label className="ml-2">Github: </label>
              </div>
              <input className="rounded-md h-10" />
            </div>
          </div>
          <div className="justify-end items-end">
            <button className="border-2 rounded-md p-2 m-1 hover:border-primary-color dark:hover:border-primary-color-dark">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
