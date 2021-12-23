import Link from '@/components/Link'

const UsesTech = ({ name, link, description }) => {
  return (
    <>
      <div>
        <ul key={name}>
          <div className="flex flex-row">
            <li key={name} className="mr-1 ">
              <Link
                href={link}
                className="hover:text-primary-color dark:hover:text-primary-color-dark text-slate-500 text-lg dark:text-slate-400"
              >
                {name}
              </Link>
            </li>
            <span className="ml-1 font-mono dark:text-gray-600 text-gray-200">
              &#47;&#47; {description}
            </span>
          </div>
        </ul>
      </div>
    </>
  )
}

export default UsesTech
