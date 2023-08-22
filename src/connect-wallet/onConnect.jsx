import React from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { getXdcModal } from '../getXdcModal';
import Web3Button from '../components/Button/web3Button';

const ConnectButton = ({ setProvider }) => {
  const onConnect = async () => {
    const web3Modal = new Web3Modal({
      cacheProvider: true,
      disableInjectedProvider: false,
      providerOptions: {
        'custom-xdc': getXdcModal,
      }
    });

    try {
      const instance = await web3Modal.connect();
      const providerConnect = new ethers.providers.Web3Provider(instance);
      setProvider(providerConnect);
    } catch (err) {
      console.log("err", err);
    }
  }

  return <Web3Button content="Get Started" onClick={onConnect}  />;
}

export default ConnectButton;
