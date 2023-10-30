import { GENERAL_TRADE_ABI, SELL_TOKEN_ABI, dINR_TRADE_ADDRESS, dUSD_TRADE_ADDRESS } from "./coreVariables"
import { getConnectedWalletAddress, initContract } from "./globalFunctions"









export const isSpendApproved = async (tokenAddress, tradeAddress) => {
  try {
    const account = await getConnectedWalletAddress()
    const contract = await initContract(SELL_TOKEN_ABI, tokenAddress)
    const approvedAmount = await contract.methods.allowance(account, tradeAddress).call()

    // console.log('approvedAmount', approvedAmount);

    return approvedAmount
  } catch (isSpendApprovedError) {
    console.info('isSpendApprovedError: ', isSpendApprovedError.message);
    return 0
  }
}



export const getOfferedTokens = async () => {
  try {
    const eventContract = await initContract(GENERAL_TRADE_ABI, dUSD_TRADE_ADDRESS),
          offeredToken = await eventContract.methods.getAllEventOffers('EzcrowDemo').call();

    // console.log('offeredToken', offeredToken);
    return offeredToken;
  } catch (getOfferedTokensError) {
    console.info('getOfferedTokensError: ', getOfferedTokensError.message);
    return false
  }
}



export const isTradeSaleOn = async () => {
  try {
    const eventContract = await initContract(GENERAL_TRADE_ABI, dINR_TRADE_ADDRESS),
          tradeSales = await eventContract.methods.isSaleOn('EzcrowDemo').call();

    // console.info(eventCode, tradeSales.saleActive);
    return {
      tradeSaleActive: tradeSales.saleActive
    };
  } catch (isTradeSaleOnError) {
    console.info('isTradeSaleOnError: ', isTradeSaleOnError.message);
    // return false
  }
}