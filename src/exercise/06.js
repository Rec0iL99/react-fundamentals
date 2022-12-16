// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef()
  // ** extra ** we now dont allow user to enter uppercase letter
  // const [error, setError] = React.useState(null)
  const [value, setValue] = React.useState('')

  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  function handleSubmit(event) {
    // by default the browser will make a get request with the form values as query parameters in the url
    // so we will get a full page refresh,  since we are building a SPA we dont need to send the values to the current url instead we send it using js (fetch)...thats why event.preventDefault()
    event.preventDefault()
    // doing console.dir(event.target) will show the dom element
    // basically that is an object/api that contains all the functions callable
    // kent got the .elements from that
    // why not console.log -> chrome will specially render the dom element instead of the object which we need
    console.dir(event.target)
    const value = event.target.elements.usernameInput.value
    // ** extra **
    console.log(usernameInputRef.current.value)
    onSubmitUsername(value)
  }

  // ** extra **
  // function handleChange(event) {
  //   const value = event.target.value
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }

  // ** the last extra **
  function handleChange(event) {
    // we can do event.target.value = value.toLowerCase() but this is not the react way they want us to use the value prop
    setValue(event.target.value.toLowerCase())
  }

  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        {/* using a value prop makes it a controlled input in react */}
        <input
          value={value}
          onChange={handleChange}
          type="text"
          ref={usernameInputRef}
          id="usernameInput"
        />
      </div>
      {/* disabled={error ? true : false */}
      <button type="submit">Submit</button>
      {/* {error ? <div role="alert">{error}</div> : null} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
