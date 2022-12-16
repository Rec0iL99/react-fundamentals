// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// ** extra **
function Box({className = '', style, size, ...otherProps}) {
  const boxSizeClass = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${className} ${boxSizeClass}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

// TIP: here it is className instead of class because it represents the dom properties....in browser the html has class and style (string) (HTML) compiled from className and style (JSX)..this className and style represents the properties in dom in dom style is not a string but an object and class is not class but className
// console $0.class -> undefined but $0.className -> ''
// JSX focus on dom property names rather than html attributes that's why className instead of class
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'lightpink'}}>
    medium pink box
  </Box>
)
const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
    </div>
  )
}

export default App
