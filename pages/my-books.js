import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function MyBooks() {
  return (
    <>
      <PageSEO title={`Books - ${siteMetadata.author}`} description="books I've written" />
      <div className="mx-24">
        <h3 className="text-lg font-medium mb-4">Build LaTeX tamplate for yor homework</h3>
        <p>My homework efficency improved a lot when I discovered LaTex</p>
        <p>It's a great tool to use for any kind of scientific or technical homework.</p>
        <p>LaTeX is great to build templates that are easily re-usable.</p>
        <br />
        <p>I used these template to build a good system for my homework returns.</p>
        <p>
          I simply built couple of templates in the beginning of the semester and re-used them every
          week
        </p>
        <Image alt="second brain" src="/static/images/enCover.png" width={500} height={400} />
        <p>This book is available in both Icelandic and english. You can get them for free.</p>
        <br />
        <br />
        <p>
          Here you can find the{' '}
          <Link
            href={'https://einargudni.gumroad.com/l/ufidy'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            Icelandic version
          </Link>{' '}
          and here is the{' '}
          <Link
            href={'https://einargudni.gumroad.com/l/sfmlw'}
            className="special-underline hover:dark:text-gray-800 dark:text-gray-100 no-underline"
          >
            English version{' '}
          </Link>
        </p>
      </div>
    </>
  )
}
