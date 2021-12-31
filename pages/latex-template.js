import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function LatexTemplate() {
  return (
    <>
      <PageSEO
        title={`Latex - ${siteMetadata.author}`}
        description={`Latex Templates - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/latex-tamplate`}
      >
        <div className="mt-10">
          <div className="bg-red-300 h-24 w-24 font-bold text-3xl">Here We Have LATEX</div>

          <div>
            <h2>Template with various photos</h2>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Smaller template</h2>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Bigger template</h2>
          </div>
        </div>
      </PageSEO>
    </>
  )
}
