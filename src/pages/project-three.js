import React from "react"
import { graphql } from "gatsby"

import ProjectDetails from "../components/ProjectDetails"

const ProjectThree = ({ data: { projectThree } }) => (
  <ProjectDetails
    title="Project Three"
    imageSizes={projectThree.childImageSharp.sizes}
  />
)

export const query = graphql`
  query ProjectThreeQuery {
    projectThree: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default ProjectThree
