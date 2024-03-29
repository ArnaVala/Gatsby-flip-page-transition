import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Flipped } from 'react-flip-toolkit'

 class ProjectCard extends React.Component {
  state = { flipping: false }

  handleClick = () => {
    if (this.link) {
      this.link.click()
    }
  }

  handleFlipStart = () => this.setState({ flipping: true })
  handleFlipComplete = () => this.setState({ flipping: false })

  render() {
    const {
      title,
      to,
      imageSizes
    } = this.props
    const { flipping } = this.state

    return(
      <Flipped
        flipId={title}
        onStart={this.handleFlipStart}
        complete={this.handleFlipComplete}
      >
        <div
          css={{
            background: '#fff',
            overflow: flipping ? 'visible' : 'hidden',
            zIndex: flipping ? 10 : 0,
            borderRadius: 0,
            borderWidth: '1px 0',
            borderStyle: 'solid',
            borderColor: '#eaecee',
            marginBottom: 20,
            cursor: 'pointer',
            '@media(min-width: 600px)': {
              borderRadius: 2,
              borderWidth: 1,
            },
          }}
          onClick={this.handleClick}
        >
          <div>
            <Img sizes={imageSizes} alt="" height="auto" width="100%" />
            <div
              css={{
                fontSize: 21,
                fontWeight: 700,
                padding: 20,
                textDecoration: 'none',
              }}
            >
              <Link
                to={to}
                css={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                innerRef={link => (this.link = link)}
              >
                {title}
              </Link>
            </div>
          </div>
        </div>
      </Flipped>
    )
  }
}

export default ProjectCard