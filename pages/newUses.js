import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { Hardware } from '@/components/Hardware'
import { Software } from '@/components/Software'
import { Other } from '@/components/Others'

export default function NewUses() {
  return (
    <div>
      <div>
        <h2 className="text-2xl">Hardware, software, and more!</h2>
        <div>
          <p>
            Here you can see a list of thw stuff I use on daily basis. You can press the{' '}
            <strong>I use this!</strong> button if you use the same thing as I.
          </p>
          <p>The number is stored in a database.</p>
        </div>
      </div>
      <br />

      <Hardware />

      <Software />

      <Other />
    </div>
  )
}
