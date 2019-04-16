import React from "react"
import { graphql } from "gatsby"

import ProjectDetails from "../components/ProjectDetails"

const ProjectFour = ({ data: { projectFour } }) => (
  <ProjectDetails
    title="Project Four"
    imageSizes={projectFour.childImageSharp.sizes}
  />
)

export const query = graphql`
  query ProjectFourQuery {
    projectFour: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default ProjectFour
