import React, { useState, useEffect } from 'react';
import LOGO from '../../assets/LOGO.png';
import design from './navbar.module.css';
import ConnectButton from '../../connect-wallet/onConnect';
import DisconnectButton from '../../connect-wallet/onDisconnect';

const Navbar = () => {

  const [provider, setProvider] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (provider) {
      const signer = provider.getSigner();
      signer.getAddress().then((connectedAddress) => {
        setAddress(connectedAddress);
      });
    }
  }, [provider]);


  return (
    <>
    <div className={design.Navbar}>
      <img src={LOGO} alt='' />
      {!address ? <ConnectButton setProvider={setProvider} setAddress={setAddress} /> : <DisconnectButton setProvider={setProvider} setAddress={setAddress} />}
    </div>
    </>
  );
};

export default Navbar;
