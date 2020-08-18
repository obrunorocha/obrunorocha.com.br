const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark" && node.frontmatter.page === "blog") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/blog/${slug.slice(12)}`,
    })
  }

  if (node.internal.type === "MarkdownRemark" && node.frontmatter.page === "projetos") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/projetos/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, 
        filter: {frontmatter: {page: {eq: "blog"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              img
              badges
              page
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      })
    })

  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage) 
  
  Array.from({ length: numPages }).forEach((__, index) => {
    createPage({
      path: index === 0 ? `/blog/` : `blog/page/${index + 1}`,
      component: path.resolve(`./src/templates/blog.js`),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })
})
  graphql(`
    {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, 
        filter: {frontmatter: {page: {eq: "projetos"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              img
              badges
              page
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    
    const prj = result.data.allMarkdownRemark.edges

    prj.forEach(({ node, next, previous }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/projeto-post.js"),
        context: {
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      })
    })

    const projetosPerPage = 6
    const nPages = Math.ceil(prj.length / projetosPerPage) 

    Array.from({ length: nPages }).forEach((__, index) => {
      createPage({
        path: index === 0 ? `/projetos/` : `projetos/page/${index + 1}`,
        component: path.resolve(`./src/templates/projetos.js`),
        context: {
          limit: projetosPerPage,
          skip: index * projetosPerPage,
          numPages: nPages,
          currentPage: index + 1,
        },
      })
    })
  })
}