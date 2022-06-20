---
description: This page describes the API provided by this library.
draft: true
---

# API

## registerImage

- Type: (props: ImageProps) => void
  - ImageProps: {import('next/image').ImageProps}

### Usage

```jsx
import { registerImage } from 'next-export-optimize-images/api'

registerImage({ src: '/images/img.png', width: 1280, height: 640 })
```
