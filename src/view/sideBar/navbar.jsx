import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: 'About Me',
      index: 1
    },
    {
      title: 'Employment History',
      index: 2
    },
    {
      title: 'Portfolio',
      index: 3
    },
    {
      title: 'Contact Me',
      index: 4
    }
  ]

  return (
    navItems.map((item) => {
      return <div key={item.index}>{item.title}</div>
    })
  )
}

export default Navbar