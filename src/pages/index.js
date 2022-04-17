import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
//why only this can work?
import * as classes from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  // console.log(data)
  // console.log(data.file.childImageSharp.fluid)

  return (
    <Layout>
      <section className={classes.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link className={classes.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
