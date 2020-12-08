import * as React from 'react'
import { createFeatureHub } from '@feature-hub/core'
import { createCommonJsModuleLoader } from '@feature-hub/module-loader-commonjs'
import { FeatureHubContextProvider, FeatureAppLoader } from '@feature-hub/react'

const {featureAppManager} = createFeatureHub('123', {moduleLoader: createCommonJsModuleLoader({ react: React })})

const ContextProv = ({ children }) => (
<FeatureHubContextProvider value={{ featureAppManager }}>
  {children}
</FeatureHubContextProvider>
)

const App = () => {
  return (
    <ContextProv>
      <div>Testing....</div>
      <FeatureAppLoader serverSrc="http://localhost:4000/app.js" src="http://localhost:4000/app.js" featureAppId="1234" />
    </ContextProv>
  )
}

export default App;
