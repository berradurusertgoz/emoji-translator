
import { useState } from 'react'
import './App.css'

const emojiDictionary = {
  happy: "😁",
  sad: "😟",
  cool: "😎",
  hello:"👋🏻",
  angry: "😡",
  sleep: "⏾",
  love: "❣️",
  ok:"👍🏻"
}

function App() {
  const [input,setInput] = useState("")
  const [translated, setTranslated] = useState("");

  const handleChange = (e) => {
    const text = e.target.value.toLowerCase();
    setInput(text);

    const words = text.split(" ");
    const result = words.map((word) => emojiDictionary[word] || word).join(" ")
    setTranslated(result)
  }
  return (
    <>
      <div className='App'>
        <h1>😄Emoji Translator😄</h1>
        <input placeholder='Type something like: happy love fire'
        value={input}
        onChange={handleChange}/>
        <p>{input ? translated : "Write the message you want to translate.."}</p>
      </div>
    </>
  )
}

export default App
