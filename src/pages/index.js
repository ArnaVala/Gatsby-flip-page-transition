import React from 'react'
import { graphql } from 'gatsby'

import ProjectCard from '../components/ProjectCard'

const IndexPage = ({ data: { projectOne, projectTwo, projectThree, projectFour } }) => (
  <div
    css={{
      maxWidth: 800,
      margin: '30px auto',
    }}
  >
    <ProjectCard
      title="Project One"
      to="/project-one"
      imageSizes={projectOne.childImageSharp.sizes}
    />
    <ProjectCard
      title="Project Two"
      to="/project-two"
      imageSizes={projectTwo.childImageSharp.sizes}
    />
    <ProjectCard
      title="Project Three"
      to="/project-three"
      imageSizes={projectThree.childImageSharp.sizes}
    />
    <ProjectCard
      title="Project Four"
      to="/project-four"
      imageSizes={projectFour.childImageSharp.sizes}
    />
  </div>
)

export const query = graphql`
  query IndexQuery {
    projectOne: file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    projectTwo: file(relativePath: { eq: "image2.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    projectThree: file(relativePath: { eq: "image3.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
    projectFour: file(relativePath: { eq: "image4.jpg" }) {
      childImageSharp {
        sizes {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`

export default IndexPage