import React from 'react'
import { graphql } from "gatsby"

import ProjectDetails from "../components/ProjectDetails"


const ProjectOne = ({ data: { projectOne} }) => (
  <ProjectDetails title="Project One" imageSizes={projectOne.childImageSharp.sizes} />
)

export const query = graphql`
  query ProjectOneQuery {
    projectOne: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default ProjectOne