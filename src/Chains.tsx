import { Chain } from 'wagmi'

export const xdc_Testnet = {
  id: 51,
  name: 'XDC Testnet',
  network: 'XDC Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'TXDC',
    symbol: 'TXDC',
  },
  rpcUrls: {
    public: { http: ['https://rpc.apothem.network'] },
    default: { http: ['https://rpc.apothem.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'BlocksPay', url: 'https://apothem.blocksscan.io/' },
    default: { name: 'BlocksPay', url: 'https://apothem.blocksscan.io/' },
  },

} as const satisfies Chain


