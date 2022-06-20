import type { ImageProps } from 'next/image'
import React from 'react'
import { renderToString } from 'react-dom/server'

import CustomImage from '../image'

const registerImage = (props: ImageProps) => {
  if (typeof window === 'undefined') {
    renderToString(<CustomImage {...props} priority />)
  }
}

export default registerImage
