import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

export default function CollectionLayout({ frontMatter, authorDetails, next, prev, children }) {
  const {
    date,
    title,
    tags,
    collection1,
    collection1Link,
    collection2,
    collection2Link,
    collection3,
    collection3Link,
    collection4,
    collection4Link,
    collection5,
    collection5Link,
    collection6,
    collection6Link,
  } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/blog/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="mt-12">
                <div>This is a collection of interesting thing I discover on the internet.</div>
                <div className="mt-8 text-sm font-medium leading-5 ">
                  {tags && (
                    <div>
                      <div>
                        <span className="mr-3">Tags: </span>
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* End of Header */}

        <div
          className="pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 "
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2">
            <div className="container py-12">
              <div className="flex flex-wrap -m-4">
                {/* Card #1 */}
                {collection1 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection1}</div>
                          <div className="mt-6">
                            <Link
                              href={collection1Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection1}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* Card #2 */}
                {collection2 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection2}</div>
                          <div className="mt-6">
                            <Link
                              href={collection2Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection2}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* Card #3 */}
                {collection3 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection3}</div>
                          <div className="mt-6">
                            <Link
                              href={collection3Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection3}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* Card #4 */}
                {collection4 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection4}</div>
                          <div className="mt-6">
                            <Link
                              href={collection4Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection4}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* Card #5 */}
                {collection5 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection5}</div>
                          <div className="mt-6">
                            <Link
                              href={collection5Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection5}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {/* Card #6 */}
                {collection6 ? (
                  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
                    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md dark:border-gray-700 border-opacity-60">
                      <div className="p-6">
                        <div className="flex flex-col">
                          <div className="text-lg font-semibold">{collection6}</div>
                          <div className="mt-6">
                            <Link
                              href={collection6Link}
                              className="text-primary-color dark:text-primary-color-dark hover:text-blue-600 dark:hover:text-yellow-300"
                              aria-label={`Read "${collection6}"`}
                            >
                              Read more &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Start of Footer */}
        <Comments frontMatter={frontMatter} />
        <footer>
          <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
            {prev && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/blog/${prev.slug}`}
                  className="text-primary-color hover:text-blue-600 dark:text-primary-color-dark dark:hover:text-yellow-300"
                >
                  &larr; {prev.title}
                </Link>
              </div>
            )}
            {next && (
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/blog/${next.slug}`}
                  className="text-primary-color hover:text-blue-600 dark:text-primary-color-dark dark:hover:text-yellow-300"
                >
                  {next.title} &rarr;
                </Link>
              </div>
            )}
          </div>
        </footer>
      </article>
    </SectionContainer>
  )
}
