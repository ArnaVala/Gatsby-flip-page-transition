import React from 'react'
import { Location } from '@reach/router'
import { Flipper } from 'react-flip-toolkit'

import { css } from 'glamor'
css.global('html', {
  fontFamily: 'Roboto, Fira Sans, sans-serif',
  backgroundColor: '#f5f5f5',
  color: '#000',
})

export const wrapRootElement = ({ element }) => (
  <>
    <Location>
      {({ location }) => <Flipper flipKey={location.key}>{element}</Flipper>}
    </Location>
  </>
)
