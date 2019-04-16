import React from 'react'

import ProjectCard from './ProjectCard'

const ProjectDetails = ({ title, imageSizes }) => (
  <div
    css={{
      maxWidth: 600,
      margin: '30px auto',
    }}
  >
    <ProjectCard title={title} to="/" imageSizes={imageSizes} />
  </div>
)

export default ProjectDetails