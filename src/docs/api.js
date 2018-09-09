SENDRegisterBusiness = {
  ein: '',
  password: '',
  companytype: '',
  BTC: '',
  ETH: '',
  PIVX: '',
  DECENT: '',
  DAI: ''
}
RETURNS = {
  BTC: 'walletAddress',
  ETH: 'walletAddress',
  PIVX: 'walletAddress',
  DECENT: 'walletAddress',
  DAI: 'walletAddress'
}

SEND Login = {
  ein: '',
  password:'',
}
RETURNS = {
 // TBD
}

send getCurrencyArray = {
  ein: ''
}
RETURNS = [
  {
    currency: '',
    address:'',
    total: '',
    usDollarTotal: '',
  },
  {...},
  ...
]

getProfile = {
  ein: ''
}
RETURNS = {
  // TBD
}

getTxnByWallet = {
  address: ''
}
RETURNS = [
  {
    dateStamp: '',
    txnId: '',
    ammount: '',
    usDollarEquiv: '',
    taxable: bool,
    taxCollected: ''
  },
  {...},
]

sendSearchParams(...args)

RETURNS = [
  {
    name: '',
    type: '', // LLC
    ein: '',
  }
]
