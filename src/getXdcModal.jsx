import React from 'react'
import detectEthereumProvider from '@metamask/detect-provider'

detectEthereumProvider().then(res => {
  if (!res) {
    throw new Error('Unable to detect window.ethereum.')
  }
})

export const getXdcModal = {
  display: {
    name: 'BlocksPay',
    logo: 'https://www.xdc.dev/images/c9ybaFZRIUhYbGfloUlM8-vqPySdLP3JpqDuNOr80cc/rs:fill:320:320/mb:500000/ar:1/aHR0cHM6Ly93d3cu/eGRjLmRldi91cGxv/YWRzL3VzZXIvcHJv/ZmlsZV9pbWFnZS8x/NTAwLzVkOWM3ZTVi/LTFmMjMtNGY2Yi05/MTE0LWE1NTk0MzYw/NmE0YS5wbmc',
    description: 'Connect to your BlocksPay Wallet'
  },
  package: detectEthereumProvider,
  connector: async (_detectEthereumProvider) => {
    const provider = await _detectEthereumProvider();
    await provider.enable();
    return provider;
  }
}