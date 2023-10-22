
export const dBTC_TOKEN_ADDRESS = "0x04afe294A974F73ca921a7770749F4FDC8f723aC"
export const dETH_TOKEN_ADDRESS = "0xAF1d51F58eAe1D5E4234Db94455A8d232F51bbF7"
export const dTLOS_TOKEN_ADDRESS = "0xcad8eD7CC5D362252405e9773324F072C5C27a4F"
export const dIDR_TOKEN_ADDRESS = "0xcd7561201E10273218762882CC5cF197d9764df3"
export const dINR_TOKEN_ADDRESS = "0x671d7Dd87Dc5b8e1587Ac9c6fC9Fb9d833155703"
export const dUSD_TOKEN_ADDRESS = "0x3D3b771725074410dBd04cB591fafd017f4FAB9C"



// SELL ADDRESS FOR PAIRED TOKENS
export const dIDR_SELL_ADDRESS = "0xeB14EE03bC142f7615aB2cf145346e9d1DeD365f"
export const dINR_SELL_ADDRESS = "0xcFda2Fe1B685F846d49793301abbB68C80bcD654"
export const dUSD_SELL_ADDRESS = "0xFD95E42c82f9595ADbe9aF16006Ec273D0AE8241"



export const SELL_TOKEN_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "eventCode_",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "teamName_",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "_mint",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eventCode",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "teamName",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

export const TRADE_TOKEN_ABI = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      },
      {
        "internalType": "contract DBToken",
        "name": "token",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "tokensOffered",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rateNumerator",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rateDenominator",
        "type": "uint256"
      }
    ],
    "name": "addOffer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "offerId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "amountToBuy",
        "type": "uint256"
      }
    ],
    "name": "buyOfferedTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "offerId",
        "type": "string"
      }
    ],
    "name": "cancelOffer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      }
    ],
    "name": "endSaleNow",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "contract StandardToken",
        "name": "_stdToken",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      }
    ],
    "name": "returnAllOfferedTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hPercFee",
        "type": "uint256"
      }
    ],
    "name": "setDBTokenFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "start",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "end",
        "type": "uint256"
      }
    ],
    "name": "setSaleStartEnd",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hPercFee",
        "type": "uint256"
      }
    ],
    "name": "setStandardTokenFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawAllFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      }
    ],
    "name": "getAllEventOffers",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "offerId",
            "type": "string"
          },
          {
            "internalType": "enum DBTokenSell.OfferStatus",
            "name": "status",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "offeringUser",
            "type": "address"
          },
          {
            "internalType": "contract DBToken",
            "name": "tokenInstance",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "totalTokensOffered",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "tokensLeft",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "numerator",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "denominator",
                "type": "uint256"
              }
            ],
            "internalType": "struct DBTokenSell.Rate",
            "name": "rate",
            "type": "tuple"
          }
        ],
        "internalType": "struct DBTokenSell.DBTokenOffer[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllSales",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "saleStart",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "saleEnd",
            "type": "uint256"
          }
        ],
        "internalType": "struct SaleFactory.Sale[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getDBTokenFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getStandardTokenFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWithdrawableFees",
    "outputs": [
      {
        "components": [
          {
            "internalType": "contract StandardToken",
            "name": "standardToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "stAmount",
            "type": "uint256"
          },
          {
            "internalType": "contract DBToken",
            "name": "dbToken",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "dbtAmount",
            "type": "uint256"
          }
        ],
        "internalType": "struct RecordingFeesOnSales.FeesOnSale[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "eventCode",
        "type": "string"
      }
    ],
    "name": "isSaleOn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "saleActive",
        "type": "bool"
      },
      {
        "internalType": "uint256",
        "name": "saleStart",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "saleEnd",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "time",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]