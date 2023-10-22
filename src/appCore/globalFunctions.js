import Web3 from 'web3';
import { toast } from "react-toastify"
import { SELL_TOKEN_ABI } from "./coreVariables";


export const chainName = {
                '0x1': 'Ethereum Main Network', '0x3': 'Ropsten Test Network', '0x4': 'Rinkeby Test Network', '0x5': 'Goerli Test Network', '0x2a': 'Kovan Test Network', '0x89': 'Polygon Mainnet', '0x13881': 'Matic Mumbai Testnet', '0x38': 'BSC Mainnet', '0x61': 'BSC Testnet', '0x28': 'Telos EVM Mainnet'
              },
              web3 = new Web3(Web3.givenProvider || 'https://polygon-rpc.com/');

              


export const initContract = async (ABI, ADDRESS) => {
  try {
    const contract = new web3.eth.Contract(ABI, ADDRESS);
    return contract;
  } catch (initContractError) {
    console.log('initContractError: ', initContractError);
  }
}




export const getTokenSymbol = async (TOKEN_ADDRESS) => {
  try {
    const contract = await initContract(SELL_TOKEN_ABI, TOKEN_ADDRESS),
          tokenSymbol = await contract.methods.symbol().call();

    // console.info(tokenBalance);
    return tokenSymbol;
  } catch (getTokenSymbolError) {
    console.log('getTokenSymbolError: ', getTokenSymbolError.message);
  }
}




export const getConnectedWalletAddress = async () => {
  try {
    // const account = await window.ethereum.selectedAddress;
    const account = await web3.eth.getAccounts();
    // console.info(account);
    if (account.length > 0) {
      return account[0];
    }
    
    console.log('Not connected');
    return false;
  } catch (getConnectedWalletAddressError) {
    console.log('getConnectedWalletAddressError: ', getConnectedWalletAddressError.message);
  }
}




export const checkWalletChain = async () => {
  const chainIdHex = await web3.eth.net.getId();
  // console.log(`0x${chainIdHex.toString(16)}`);

  return chainIdHex;
}





export const checkWalletChainAndSwitch = async (chainToSwitchTo) => {
  const chainIdHex = await checkWalletChain(),
        chainInfo = {
          '0x89': {
            chainId: '0x89',
            chainName: 'Polygon Mainnet',
            nativeCurrency: {
              name: 'Matic',
              symbol: 'MATIC',
              decimals: 18
            },
            rpcUrls: ['https://polygon-rpc.com'],
            blockExplorerUrls: ['https://polygonscan.com/'],
          },
          
          '0x38': {
            chainId: '0x38',
            chainName: 'BSC Mainnet',
            nativeCurrency: {
              name: 'BNB',
              symbol: 'BNB',
              decimals: 18
            },
            rpcUrls: ['https://bsc-dataseed1.binance.org'],
            blockExplorerUrls: ['https://bscscan.com/'],
          },
          
          '0x28': {
            chainId: '0x28',
            chainName: 'Telos EVM Mainnet',
            nativeCurrency: {
              name: 'TLOS',
              symbol: 'TLOS',
              decimals: 18
            },
            rpcUrls: ['https://mainnet.telos.net/evm'],
            blockExplorerUrls: ['https://teloscan.io/'],
          },
        };



  console.info('Current Network:', chainName[`0x${chainIdHex.toString(16)}`]);

  if (parseInt(chainIdHex) !== parseInt(chainToSwitchTo)) { // WALLET IS NOT ON PROPER NETWORK
    console.info('Switch to:', chainInfo[chainToSwitchTo].chainName);

    return new Promise((resolve, reject) => { // SWITCH WALLET NETWORK TO PROPER
      web3.currentProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainToSwitchTo }],
      })
      .then(chain => { // SWITCHED SUCCESSFULLY
        toast.success(`Wallet chain successfully changed to ${chainName[chainToSwitchTo]}`)
        return resolve(true);
      })
      .catch(switchToProperChainError => {
        if (switchToProperChainError.code === 4902) { // Unrecognized chain ID
          toast.info(`${chainInfo[chainToSwitchTo].chainName} is not found on your wallet`)
          // NETWORK NOT FOUND ON WALLET, ADD IT
          window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              chainInfo[chainToSwitchTo]
            ]
          })
          .then(chain => { // ADDED SUCCESSFULLY
            toast.success(`${chainName[chainToSwitchTo]} successfully added to your wallet`)
            return resolve(true);
          })
          .catch(addProperChainError => {
            console.info('addProperChainError', addProperChainError);
            toast.error(addProperChainError.message)
            return reject(false);
          })
        }

        if (switchToProperChainError.code === 4001) { // USER REJECTED SWITCH REQUEST
          toast.error(switchToProperChainError.message)
        }
        console.info('switchToProperChainError', switchToProperChainError);
        return reject(false);
      })
    }).catch(checkWalletChainAndSwitchError => {
      console.info('checkWalletChainAndSwitchError', checkWalletChainAndSwitchError);
      toast.error(checkWalletChainAndSwitchError.message)
      return false;
    })
  }

  return true;
}




export const checkIfMetamaskIsInstalled = async () => {
  if (typeof window.ethereum === 'undefined') { // USER DOES NOT HAVE METAMASK INSTALLED
    // toast.error("Uh Oh! You do not have metamask installed")
    return false
  }

  return true;
}




export const connectToMetamask = async () => {
  if (typeof window.ethereum === 'undefined') {
    toast.error("You do not have metamask installed")
    return false;
  }

  let hashedWallet = "",
      connectedAccount = await window.ethereum.request({ method: "eth_accounts" });

  if (connectedAccount && connectedAccount.length > 0) {
    hashedWallet = `${connectedAccount[0].slice(0, 6)}........${connectedAccount[0].slice(connectedAccount[0].length - 4, connectedAccount[0].length)}`


    return {
      hashedAccount: hashedWallet,
    }
  } else { // METAMASK IS NOT CONNECTED
    return new Promise((resolve, reject) => {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(accounts => {
          hashedWallet = `${accounts[0].slice(0, 6)}........${accounts[0].slice(accounts[0].length - 4, accounts[0].length)}`

          toast.success("Wallet Connected")
          return resolve({
            hashedAccount: hashedWallet,
          })
        })
        .catch(error => {
          let errorMessage = (error.code === 4001) ? "You rejected the connection" : error.message
          reject(toast.error(errorMessage))
          return
        })
    }).catch(error => {
      toast.error(error.message)
      return
    })
  }
}