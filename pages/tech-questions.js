import { useForm } from 'react-hook-form'
import SocialIconNoHref from '@/components/social-icons/nonHref'

export default function TechQuestions() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  // console.log(watch('example')) // watch input value by passing the name of it

  return (
    <div>
      <div>
        <h2 className="text-lg mb-1">The state of technology in Iceland</h2>
        <p>
          This is just for information. Answer the questions with your best interest so that the
          data will show a better picture.
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex-col">
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">Name:</label>
              <input className="rounded-md h-10" placeholder="Einar gudni" {...register('name')} />
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                Are you a part of the Icelandic technology scene:{' '}
              </label>
              <select {...register('iceland')}>
                <option>Yes</option>
                <option>No</option>
              </select>
              <p className="text-xs">
                Did you study in Iceland or do you work for an Icelandic company
              </p>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">Education:</label>
              <select className="rounded-md" {...register('education')}>
                <option>Diploma</option>
                <option>Other</option>
                <option>Self taught</option>
                <option>Still finishing my studies</option>
                <option>University</option>
              </select>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">Years of experience:</label>
              <input className="rounded-md h-10" placeholder="2" {...register('experience')} />
              <p className="text-xs">How many years would you say you have been programming</p>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                What type of a developer would <strong>you</strong> say you are:{' '}
              </label>
              <select className="rounded-md" {...register('type')}>
                <option>Backend developer</option>
                <option>Fullstack developer</option>
                <option>Frontend developer</option>
              </select>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                In what programming language was the last piece of code you wrote:{' '}
              </label>
              <input className="rounded-md h-10" placeholder="TypeScript" />
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                What technology do you most use on daily basis:{' '}
              </label>
              <input className="rounded-md h-10" />
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">Work: </label>
              <input className="rounded-md h-10" placeholder="Maul" {...register('workplace')} />
              <div>
                <input
                  type="checkbox"
                  className="mr-2 rounded-md"
                  value="Looking for a job"
                  {...register('jobSearching')}
                />
                <label>Looking for a job</label>
              </div>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                Have you spent some time on personal-projects in the last year:{' '}
              </label>
              <select className="rounded-md" {...register('petProjects')}>
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                Are you thinking about changing jobs in the near future:{' '}
              </label>
              <select className="rounded-md" {...register('newJob')}>
                <option>No</option>
                <option>Yes</option>
              </select>
              <p className="text-xs">Near future being in the next 12-18 months</p>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">What are you excited about: </label>
              <input className="rounded-md h-10" placeholder="Vercel" {...register('excitement')} />
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                Where do you hear about new things:{' '}
              </label>
              <div className="flex">
                <div className="flex-col mr-3">
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Articles"
                      {...register('newThings')}
                    />
                    <label>Articles</label>
                  </div>
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Books"
                      {...register('newThings')}
                    />
                    <label>Books</label>
                  </div>
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Coworkers"
                      {...register('newThings')}
                    />
                    <label>Co-workers</label>
                  </div>
                </div>
                <div className="flex-col ml-3">
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Friends"
                      {...register('newThings')}
                    />
                    <label>Friends</label>
                  </div>
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="podcasts"
                      {...register('newThings')}
                    />
                    <label>Podcasts</label>
                  </div>
                  <div className="m-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      value="Twitter"
                      {...register('newThings')}
                    />
                    <label>Twitter</label>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label>Other: </label>
                <input
                  className="rounded-md h-10"
                  placeholder="Other"
                  value=""
                  {...register('newThings')}
                />
              </div>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">
                Operation system you <strong>most</strong> use:{' '}
              </label>
              <select className="rounded-md" {...register('os')}>
                <option>Linux</option>
                <option>macOs</option>
                <option>Windows</option>
              </select>
            </div>
            <div className="m-1 p-2">
              <label className="mr-2 font-semibold text-lg">One advice to give to others: </label>
              <input
                className="rounded-md h-10"
                placeholder="Never deploy on Fridays"
                {...register('advice')}
              />
            </div>
            <hr />
            <div className="m-1 p-2">
              <div className="m-1 flex space-x-2 items-center">
                <div className="flex">
                  <SocialIconNoHref kind="external" size="5" />
                  <label className="ml-2 font-semibold text-lg">Homepage: </label>
                </div>
                <input className="rounded-md h-10" {...register('homepage')} />
              </div>

              <div className="m-1 flex space-x-2 items-center">
                <div className="flex">
                  <SocialIconNoHref kind="twitter" size="5" />
                  <label className="ml-2 font-semibold text-lg">Twitter: </label>
                </div>
                <input className="rounded-md h-10" {...register('twitter')} />
              </div>

              <div className="m-1 flex space-x-2 items-center">
                <div className="flex">
                  <SocialIconNoHref kind="linkedin" size="5" />
                  <label className="ml-2 font-semibold text-lg">Linkedin: </label>
                </div>
                <input className="rounded-md h-10" {...register('linkedin')} />
              </div>

              <div className="m-1 flex space-x-2 items-center">
                <div className="flex">
                  <SocialIconNoHref kind="github" size="5" />
                  <label className="ml-2 font-semibold text-lg">Github: </label>
                </div>
                <input className="rounded-md h-10" {...register('github')} />
              </div>
            </div>
            <div className="justify-end items-end">
              <button
                type="submit"
                className="border-2 rounded-md p-2 m-1 hover:border-primary-color dark:hover:border-primary-color-dark"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
