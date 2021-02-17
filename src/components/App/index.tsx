import * as React from 'react'

import { HOME_PAGE_GREETING } from '../../messages'

const App = (): JSX.Element => {
  React.useEffect(() => {
    console.log('React working just fine!')
  })

  return (
    <h1 role='greeting'>
      {HOME_PAGE_GREETING}
    </h1>
  )
}

export default App
