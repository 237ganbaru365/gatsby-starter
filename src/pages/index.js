import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
//why only this can work?
import * as classes from "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={classes.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link className={classes.btn} to="/portfolio">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}
