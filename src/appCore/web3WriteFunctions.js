import { toast } from "react-toastify";
import { GENERAL_TRADE_ABI, SELL_TOKEN_ABI } from "./coreVariables";
import { getConnectedWalletAddress, initContract, web3 } from "./globalFunctions";





export const approveStandardTokenToSpendOnTrade = async (tokenBuyAmount, tokenAddress, tradeAddress) => {
  let account = await getConnectedWalletAddress(),
      teamTokenContract = await initContract(SELL_TOKEN_ABI, tokenAddress),
      approveAmount = web3.utils.toWei(tokenBuyAmount.toString(), 'lovelace');



  return new Promise((resolve, reject) => {
    teamTokenContract.methods.approve(tradeAddress, approveAmount)
    .send({
      from: account,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null,
    })
    .once("transactionHash", (hash) => {
      toast.info("Your approve spend transaction is pending confirmation on the block");
      console.log("transactionHash", hash);
    })
    .on('receipt', (receipt) => {
      toast.success('Approve spend transaction successfully mined!')
      console.info('Transaction Receipt', receipt);

      return resolve(true);
    })
    .on('error', (approveSpendCatchError) => {
      toast.error(approveSpendCatchError.message)
      // console.info('approveSpendCatchError', approveSpendCatchError.message)
      return reject(false);
    })
  }).catch((approveSpendError) => {
    toast.error(approveSpendError.message)
    console.info('approveSpendError', approveSpendError.message)
    return false
  });
}




export const buyOfferedTradeToken = async (eventCode, offerId, amountToBuy, tradeTokenAddress) => {
  const userAddress = await getConnectedWalletAddress(),
        mainContract = await initContract(GENERAL_TRADE_ABI, tradeTokenAddress),
        convertedAmountToBuy = web3.utils.toWei(amountToBuy.toString(), 'lovelace')


  return new Promise((resolve, reject) => {
    mainContract.methods.buyOfferedTokens(eventCode, offerId, convertedAmountToBuy)
    .send({
      from: userAddress,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null,
    })
    .once('transactionHash', (hash) => {
      console.log("hash", hash);

      toast.info("Your transaction is pending confirmation on the block");
    })
    .once('receipt', (receipt) => {
      console.info(receipt);
      toast.success("Your transaction receipt is ready! ");
    })
    .once('confirmation', (confirmed) => {
      console.info("confirmed", confirmed);
      toast.success("Your transaction is confirmed! ");

      return resolve(true);
    })
    .on('error', (contractError) => {
      toast.error(contractError.message)
      console.log(contractError);

      return reject(false)
    })
  }).catch(promiseError => {
    console.log(promiseError);
    toast.error(promiseError.message)
    return false;
  })
}