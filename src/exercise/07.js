// Rendering Lists
// http://localhost:3000/isolated/exercise/07.js

import * as React from 'react'

const allItems = [
  {id: 'apple', value: '🍎 apple'},
  {id: 'orange', value: '🍊 orange'},
  {id: 'grape', value: '🍇 grape'},
  {id: 'pear', value: '🍐 pear'},
]

function App() {
  const [items, setItems] = React.useState(allItems)

  function addItem() {
    const itemIds = items.map(i => i.id)
    setItems([...items, allItems.find(i => !itemIds.includes(i.id))])
  }

  function removeItem(item) {
    setItems(items.filter(i => i.id !== item.id))
  }

  // this is what i understood when we click on remove grape what happens is grape item is renamed to pear but <input has its own state it will still remain grape
  // this is why we give a key prop

  // from the video -> how will react know you removed an element in the array or if you removed a value and changed value of other elements in the array
  // when removing elements in the example without the key prop, React is guessing which element was really removed sometimes it guesses right and sometimes wrong
  // with the key prop react can track the element over time
  // passes index of the array element to key prop is a bad idea since this is default behaviour when key prop is not given

  return (
    <div className="keys">
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{listStyle: 'none', paddingLeft: 0}}>
        {items.map(item => (
          // 🐨 add a key prop to the <li> below. Set it to item.id
          <li key={item.id}>
            <button onClick={() => removeItem(item)}>remove</button>{' '}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{' '}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
