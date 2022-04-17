//fetch data and genelate pages with existing data based on template file

//use require to import from node
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  //in this case, graphql is function
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/projects/" + node.frontmatter.slug,
      //component requires absolute path
      component: path.resolve("./src/templates/project-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
