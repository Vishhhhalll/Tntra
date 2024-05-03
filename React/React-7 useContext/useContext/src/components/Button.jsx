import { counterContext } from "../context/contetxt"
import Component1 from "./Component1"
import { useContext } from "react"

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span><Component1 /></span>I am a button</button>
    </div>
  )
}

export default Button