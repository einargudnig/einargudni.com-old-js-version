import * as React from 'react'
import { useRouter } from 'next/router'
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from 'kbar'

export default function CommandBar(props) {
  const router = useRouter()

  const actions = [
    {
      id: 'copy',
      name: 'Copy URL',
      shortcut: ['u'],
      keywords: 'copy-url',
      section: 'General',
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <i className="ri-file-copy-line" style={iconStyle} />,
    },
    {
      id: 'email',
      name: 'Send Email',
      shortcut: ['e'],
      keywords: 'send-email',
      section: 'General',
      perform: () => window.open('mailto:einargudnig@gmail.com', '_blank'),
      icon: <i className="ri-mail-line" style={iconStyle} />,
    },
    {
      id: 'source',
      name: 'View Source',
      shortcut: ['s'],
      keywords: 'view-source',
      section: 'General',
      perform: () => window.open('https://github.com/einargudnig/einargudni.com', '_blank'),
      icon: <i className="ri-braces-line" style={iconStyle} />,
    },
    {
      id: 'home',
      name: 'Home',
      shortcut: ['g', 'h'],
      keywords: 'go-home',
      section: 'Go To',
      perform: () => router.push('/'),
      icon: <i className="ri-home-5-line" style={iconStyle} />,
    },
    {
      id: 'about',
      name: 'About',
      shortcut: ['g', 'a'],
      keywords: 'go-about',
      section: 'Go To',
      perform: () => router.push('/about'),
      icon: <i className="ri-user-line" style={iconStyle} />,
    },
    {
      id: 'blog',
      name: 'Blog',
      shortcut: ['g', 'b'],
      keywords: 'go-blog',
      section: 'Go To',
      perform: () => router.push('/blog'),
      icon: <i className="ri-ball-pen-line" style={iconStyle} />,
    },
    {
      id: 'projects',
      name: 'Projects',
      shortcut: ['g', 'p'],
      keywords: 'go-projects',
      section: 'Go To',
      perform: () => router.push('/projects'),
      icon: <i className="ri-lightbulb-line" style={iconStyle} />,
    },
    // {
    //   id: 'reminder',
    //   name: 'Reminder',
    //   shortcut: ['g', 'r'],
    //   keywords: 'go-reminder',
    //   section: 'Go To',
    //   perform: () => router.push('/reminder'),
    //   icon: <i className="ri-time-line" style={iconStyle} />,
    // },
    {
      id: 'github',
      name: 'Github',
      shortcut: ['g'],
      keywords: 'go-github',
      section: 'Follow',
      perform: () => window.open('https://github.com/einargudnig', '_blank'),
      icon: <i className="ri-github-line" style={iconStyle} />,
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      shortcut: ['l'],
      keywords: 'go-linkedin',
      section: 'Follow',
      perform: () => window.open('https://linkedin.com/in/einargudni', '_blank'),
      icon: <i className="ri-linkedin-line" style={iconStyle} />,
    },
  ]

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner style={positionerStyle}>
          <KBarAnimator className="kbar-blur" style={animatorStyle}>
            <KBarSearch style={searchStyle} placeholder="Type a command or search…" />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  )
}

function RenderResults() {
  const { results } = useMatches()

  return (
    <KBarResults
      items={results}
      onRender={({ item, active }) =>
        typeof item === 'string' ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ResultItem action={item} active={active} />
        )
      }
    />
  )
}

// eslint-disable-next-line react/display-name
const ResultItem = React.forwardRef(({ action, active }, ref) => {
  return (
    <div ref={ref} style={getResultStyle(active)}>
      <div style={actionStyle}>
        {action.icon && action.icon}
        <div style={actionRowStyle}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden style={shortcutStyle}>
          {action.shortcut.map((shortcut) => (
            <kbd key={shortcut} style={kbdStyle}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
})

const positionerStyle = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  inset: '0px',
  padding: '14vh 16px 16px',
  background: 'rgba(0, 0, 0, .8)',
  boxSizing: 'border-box',
}

const animatorStyle = {
  maxWidth: '600px',
  width: '100%',
  color: '#fff',
  borderRadius: '8px',
  overflow: 'hidden',
}

const searchStyle = {
  padding: '12px 16px',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  margin: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  color: '#ffff',
}

const groupNameStyle = {
  padding: '8px 16px',
  fontSize: '10px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  background: 'rgba(0, 0, 0, 0.7)',
}

const iconStyle = {
  fontSize: '20px',
  position: 'relative',
  top: '-2px',
}

const kbdStyle = {
  padding: '4px 8px',
  textTransform: 'uppercase',
  color: 'var(--secondaryColor)',
  background: 'rgba(255, 255, 255, 0.1)',
}

const shortcutStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gap: '4px',
}

const actionStyle = {
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
}

const actionRowStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const getResultStyle = (active) => {
  return {
    padding: '12px 16px',
    background: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    cursor: 'pointer',
    color: active ? '#ffffff' : '#ffffff',
  }
}
