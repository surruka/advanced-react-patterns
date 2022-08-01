// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(children, child => {
    return React.cloneElement(child, {on, toggle});
  })
}

const ToggleOn = ({on, children}) => {
  if (on) return children;
  return null;
}

const ToggleOff = ({on, children}) => {
  if (!on) return children;
  return null;
}

const ToggleButton = ({on, toggle, ...props}) => {
  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (
    <div>
      <Toggle>
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
