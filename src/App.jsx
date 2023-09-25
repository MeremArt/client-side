
import './App.css'
import './Polyfills';
import './global.css';
import Routers from './Routes/Routers'
import { UserContext } from './Context/Context'
import { useContext } from 'react'
import UserContextProvider from './Context/Context'
import React, { useState } from 'react'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { arbitrum} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [arbitrum],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_REACT_APP_ALCHEMY_ID}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Hyve Finance',
  projectId: '274de4271228fdd69013c56274f0e688',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


function App() {
  return (
    <>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}
      theme={lightTheme({
        accentColor: '#093D8B',
        accentColorForeground: 'white',
        borderRadius: 'small',
        fontStack: 'system',
        overlayBlur: 'small',
      })}>
      <UserContextProvider>
        <Routers/>
    </UserContextProvider>  
      </RainbowKitProvider>
    </WagmiConfig>
    </>
  )
}

export default App
