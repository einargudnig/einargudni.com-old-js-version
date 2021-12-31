import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NowPlaying from './NowPlaying'
import Typewriter from 'typewriter-effect'

const LayoutWrapper = ({ children }) => {
  const stringSplitter = (string) => {
    const splitter = string.replace('&gt;', '>')
    return splitter.split('')
  }

  const stringSplitter2 = (string) => {
    const splitter2 = string.replace('&lt;', '<')
    return splitter2.split('')
  }

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label="Einar Gudni's website">
              <div className="flex items-center justify-between text-primary-color dark:text-primary-color-dark text-xl font-medium">
                {/* <Typewriter
                  options={{
                    strings: [`<strong><business /> Co</strong>`],
                    autoStart: true,
                    loop: true,
                    stringSplitter,
                    stringSplitter2,
                  }}
                />*/}
                {'<Einar />'}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 hover:dark:text-primary-color-dark hover:text-primary-color"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="relative mb-auto">{children}</main>
        <NowPlaying />
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
