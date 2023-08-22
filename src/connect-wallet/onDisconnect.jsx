import React from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { getXdcModal } from '../getXdcModal';
import Web3Button from '../components/Button/web3Button';

const DisconnectButton = ({ setProvider, setAddress }) => {
    const onDisconnect = async () => {
      const web3Modal = new Web3Modal({
        cacheProvider: true,
        disableInjectedProvider: false,
        providerOptions: {
            'custom-xdc': getXdcModal,
        }
      });
  
      if (web3Modal.cachedProvider) {
        await web3Modal.clearCachedProvider();
        setProvider(null);
        setAddress(null);
      }
    }
  
    return <Web3Button content="Log Out" onClick={onDisconnect}  />;
  }
  
  export default DisconnectButton;