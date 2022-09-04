import Image from '@/components/Image'
import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function BookLayout({ children, frontMatter }) {
  const { title, cover, bookauthor, rating, amazonLink } = frontMatter

  return (
    <>
      <PageSEO title={`Book - ${title}`} description={`Book - ${title}`} />
      <div
        className="pb-8 divide-gray-200 xl:divide-y-0 dark:divide-gray-700"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        {/* Header Section */}
        <div className="flex justify-between mx-2 mt-4">
          <div>
            <Image
              src={cover}
              alt="book cover"
              width="400px"
              height="550px"
              // className="w-48 h-48 rounded-full"
            />
          </div>

          <div className="flex-col">
            <h2 className="font-semibold text-xl mb-3">{title}</h2>
            <h4 className="font-semibold mb-5">{bookauthor}</h4>
            <span className="my-2">{rating}</span> <br />
            <span className="mb-2">
              <Link href={amazonLink} className="text-primary-color dark:text-primary-color-dark">
                Read more on Amazon
              </Link>
            </span>{' '}
            <br />
            <span className="mb-2">
              <Link href="/books" className="text-primary-color dark:text-primary-color-dark">
                More books
              </Link>
            </span>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
          <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">{children}</div>
        </div>
        <div>{/* Footer Section */}</div>
      </div>
    </>
  )
}
