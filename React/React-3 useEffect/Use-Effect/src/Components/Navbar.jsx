import { useEffect } from "react"

const Navbar = ({color}) => {
//Case 1 - Run on every render
useEffect(() => {
    alert("Hey i will run on every render")
  })

  //Case 2 - Run only on first render
  useEffect(() => {
    alert("Hey welcome to my page")
  }, [])

  //Case 3 - Run only when certain values change
  useEffect(() => {
    alert("I am running because Color was changed")
  }, [color])

  // Example of cleanup function
  useEffect(() => {
    alert("Hey welcome to my page this is a first render of app.jsx")
    return () => {
      alert("component was unmounted")
    }
  }, [])

  return (
    <div>I am navbar of {color} hehe...</div>
  )
}

export default Navbar