import React from 'react'

import Image from '../../../dist/image'
import { imageProps } from '../pages/dynamic'

const HeavyComponent = () => {
  return <Image {...imageProps} />
}

export default HeavyComponent
