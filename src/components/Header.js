import { Link } from "gatsby"
import React from "react"
import "./Header.css"

export default function(){
  return (
<header className="header">
<Link className="title" to="/">Kadir'in Blogu</Link>
<nav style={{ marginTop: 0 }}>
<Link className="link" to="/">Ana Sayfa</Link>
<Link className="link" to="/hakkimda">Hakkımda</Link>
</nav>
</header>
  )
}