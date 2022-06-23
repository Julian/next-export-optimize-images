import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

import { registerImage } from '../../../dist/api'
import dynamicSrc from '../images/dynamic.png'

export const imageProps = { src: dynamicSrc }

registerImage(imageProps)
const DynamicComponent = dynamic(() => import('../components/HeavyComponent'), { suspense: true, ssr: false })

const IndexPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicComponent />
    </Suspense>
  )
}

export default IndexPage
