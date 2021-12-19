import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import NowPlaying from './NowPlaying'
import Typewriter from 'typewriter-effect'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="Einar Gudni's website">
              <div className="flex items-center justify-between text-primary-color dark:text-primary-color-dark">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('<Einar />')
                      .callFunction(() => {
                        console.log('String typed out!')
                      })
                      .pauseFor(2500)
                      .start()
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <NowPlaying />
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
