import Laptop from './laptop.svg'
import Airpods from './airpods.svg'
import Iphone from './iphone.svg'
import Monitor from './monitor.svg'
import Mouse from './mouse.svg'
import Keyboard from './keyboard.svg'
import Kindle from './kindle.svg'
import Headphones from './headphones.svg'
import SmartWatch from './smartwatch.svg'
import Camera from './camera.svg'

const components = {
  laptop: Laptop,
  airpods: Airpods,
  iphone: Iphone,
  monitor: Monitor,
  mouse: Mouse,
  keyboard: Keyboard,
  kindle: Kindle,
  headphones: Headphones,
  smartwatch: SmartWatch,
  camera: Camera,
}

const UsesIcon = ({ kind, size = 8 }) => {
  if (!kind) return null

  const UsesSvg = components[kind]

  return (
    <>
      <span className="sr-only">{kind}</span>
      <UsesSvg
        className={`text-gray-700 dark:text-gray-400 hover:text-primary-color dark:hover:text-primary-color-dark h-${size} w-${size}`}
      />
    </>
  )
}

export default UsesIcon
