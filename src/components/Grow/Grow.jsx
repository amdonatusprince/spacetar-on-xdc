import React, { useState, useEffect } from 'react';
import RIGHT from '../../assets/grow_img.png';
import STAR from '../../assets/starz.png';
import Button from '../Button/Button';
import design from './grow.module.css';
import { Link } from 'react-router-dom';
import ConnectButton from '../../connect-wallet/onConnect'


const Grow = () => {

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

  const isConnected = !!address;

  return (
    <div className={`${design.Grow} `}>
      <div className={design.Grow2}>
        <div className={design.Grow_left}>
          <img src={STAR} alt='' />
          <p>Trusted by 3456+ users worldwide</p>
          <div className={design.Grow_left_middle}>
            <h1>
              Share Your Story with <span>Spacestar</span>
            </h1>
            <p>
              A safe haven where you can freely share your thoughts, emotions, and experiences,
              knowing that you are not alone.
            </p>
          </div>
          <div className={design.Navbar}>
            {/* Conditionally render the button */}
            {isConnected ? (
              <Link to='/dashboard'>
                <Button content='Launch dApp' />
              </Link>
            ) : (
              <ConnectButton setProvider={setProvider} setAddress={setAddress} />
            )}
          </div>
        </div>
        <div className={design.Grow_right}>
          <img src={RIGHT} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Grow;
