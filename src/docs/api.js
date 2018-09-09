// BusinessProfile
SEND RegisterBusiness = {
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

// Login
SEND Login = {
  ein: '',
  password:'',
}
RETURNS = {
 // TBD
 companyName: '',
 _id: '',
}

// CurrencyAddressList
send getCurrencyArray = {
  _id: ''
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

//
getBusinessProfile = {
  _id: ''
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
