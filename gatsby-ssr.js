import React from 'react'
import { Location } from '@reach/router'
import { Flipper } from 'react-flip-toolkit'

export const wrapRootElement = ({ element }) => (
  <>
    <Location>
      {({ location }) => <Flipper flipKey={location.key}>{element}</Flipper>}
    </Location>
  </>
)
