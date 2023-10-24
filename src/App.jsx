import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./components/NavBar";
import Listings from "./pages/Listings";
import { checkIfMetamaskIsInstalled, checkWalletChainAndSwitch, connectToMetamask, getConnectedWalletAddress } from './appCore/globalFunctions';


function App() {

  const chainInfo = { hex: '0x1389', title: 'Mantle', symbol: 'MNT' },
        [showChainPopUp, setShowChainPopUp] = useState(false),
        [isLoading, setIsLoading] = useState(true),
        // METAMASK RELATED STATES
        [hashedWallet, setHashedWallet] = useState('Connect Wallet'),
        [connectedWallet, setConnectedWallet] = useState(''),
        [openMetamaskWarning, setOpenMetamaskWarning] = useState(false),
        [walletIsConnected, setWalletIsConnected] = useState(false),
        [walletBalance, setWalletBalance] = useState({
          networkTokenBalance: 0,
          standardTokenBalance: 0,
          standardTokenSymbol: 'USDC',
          versusStandardTokenBalance: 0,
          versusStandardTokenSymbol: 'STLOS',
          rbnTokenBalance: 0,
          rbnTokenSymbol: 'RBN'
        }),
        [switchedNetwork, setSwitchedNetwork] = useState({
          status: false,
          portfolioMessage: `Please connect to the ${chainInfo.title} mainnet for events in your portfolio`,
          eventMessage: `Please connect to the ${chainInfo.title} mainnet for information about events`,
          teamMessage: `Connect to ${chainInfo.title} mainnet for sale information of team`,
        })



  
  
  useEffect(() => {
    checkIfMetamaskIsInstalled().then(installed => {

      if (installed === true) {
        window.ethereum.on('chainChanged', (_chainId) => {
          if (typeof _chainId !== 'undefined') {
            if (_chainId !== chainInfo.hex) { /* METAMASK IS NOT ON THE PREFERRED NETWORK */
              setShowChainPopUp(true)
              setSwitchedNetwork(previousState => ({...previousState, status: false}))
              return true;
            }
          }
          setShowChainPopUp(false)
          setSwitchedNetwork(previousState => ({...previousState, status: true}))
          return false;
        });

        
        return getConnectedWalletAddress().then(account => {
          if (typeof account !== 'boolean') {
            setConnectedWallet(account)
            setHashedWallet(`${account.slice(0, 6)}......${account.slice(account.length - 4, account.length)}`.toLowerCase());
            setWalletIsConnected(true)

            return checkWalletChainAndSwitch(chainInfo.hex).then(connected => {
              console.log('Network Switched', connected)
              if (connected === true) {
                // getConnectedWalletBalance().then(balance => setWalletBalance(balance))
                setSwitchedNetwork(previousState => ({...previousState, status: true}))
                return
              }
            })
          }

          setIsLoading(false)
        })
      }

      setOpenMetamaskWarning(true)
      return;
    })
    
    setIsLoading(false)
  }, [chainInfo.hex, walletIsConnected])










  const connectToWallet = async () => {
    connectToMetamask().then(metamaskData => {
      if (typeof metamaskData === typeof true) {
        setOpenMetamaskWarning(true)
        return;
      }

      return checkWalletChainAndSwitch(chainInfo.hex).then(connected => {
        setHashedWallet(metamaskData.hashedAccount)
        setWalletIsConnected(true)

        console.log('Network Switched', connected)
        if (connected === true) {
          setSwitchedNetwork(previousState => ({...previousState, status: true}))
          return
        }
      })
    });
  }







  return (
    <div className="">
      <NavBar
        connectToWallet={connectToWallet}
        hashedWallet={hashedWallet}
        walletIsConnected={walletIsConnected}
        chainInfo={chainInfo}
        walletBalance={walletBalance}
      />

      <Listings
        switchedNetwork={switchedNetwork}
        connectedWallet={connectedWallet}
      />


      <ToastContainer position="bottom-left" theme="colored" />
    </div>
  );
}

export default App;
