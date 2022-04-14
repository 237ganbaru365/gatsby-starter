import React from "react"
import Layout from "../../components/Layout"
import * as classes from "../../styles/projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <div className={classes.portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
      </div>
    </Layout>
  )
}
