import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

import { Hardware } from '@/components/Hardware'

export default function NewUses() {
  return (
    <div>
      <p>Hi guys, this will be my new uses page. It will be cool!</p>
      <br />
      {/* <h3>Hardware</h3>
      <ul>
        <li>MacBook Pro</li>
        <li>airpods pro</li>
        <li>sony headphones</li>
        <li>kindle</li>
        <li>mx master 3</li>
        <li>keychron k4</li>
        <li>keychron k3</li>
        <li>asus 24</li>
      </ul> */}
      <Hardware />

      <h3>Software</h3>
      <ul>
        <li>vscode</li>
        <li>warp</li>
        <li>obsidian</li>
        <li>cron</li>
        <li>raycast</li>
        <li>1password</li>
        <li>Spotify</li>
        <li>postman</li>
        <li>Anki</li>
        <li>Figma</li>
        <li>KeyCastr</li>
        <li>RescueTime</li>
        <li>Loom</li>
        <li>Typist</li>
      </ul>
      <h3>other</h3>
      <ul>
        <li>Aeropress</li>
        <li>Timemore C2 Hand Grinder</li>
      </ul>
    </div>
  )
}
