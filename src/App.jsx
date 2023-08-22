import Home from './pages/Home/Home';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Navroutes from './components/NavRoutes/Navroutes';
import Soon from '../src/pages/Soon/Soon';
// // import '../src/'
// import React, { useState, useEffect } from 'react';
// import ConnectButton from './connect-wallet/onConnect';
// import DisconnectButton from './connect-wallet/onDisconnect';


// const App = () => {
//   const [provider, setProvider] = useState(null);
//   const [address, setAddress] = useState(null);


//   useEffect(() => {
//     if (provider) {
//       const signer = provider.getSigner();
//       signer.getAddress().then((connectedAddress) => {
//         setAddress(connectedAddress);
//       });
//     }
//   }, [provider]);



//   return (
//     <div align="center">
//       <h3>How to connect XDC Pay wallet (chrome extension) with Web3Modal</h3>
//       {}
//       {!provider &&  <ConnectButton setProvider={setProvider} />}
//       {provider && (
//         <div>
//           <p>Connected Address: {address}</p>
//           <DisconnectButton setProvider={setProvider} setAddress={setAddress} />
//         </div>
//       )}
//     </div>
//   );
// }


function App() {
  return (
    <>
      <Navroutes/>
    </>
  );
}

export default App;