import React from 'react'
import { graphql } from "gatsby"
import ProjectDetails from "../components/ProjectDetails"


const ProjectTwo = ({ data: { projectTwo } }) => (
  <ProjectDetails title="Project Two" imageSizes={projectTwo.childImageSharp.sizes} />
)

export const query = graphql`
  query ProjectTwoQuery {
    projectTwo: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default ProjectTwo