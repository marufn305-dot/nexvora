const NEXVORA_DATA = {
  
  commissionRate: 5,
  
  seller: {
    totalSales: 0,
    pendingBalance: 0,
    availableBalance: 0,
    totalCommission: 0,
    totalWithdrawn: 0
  },
  
  admin: {
    totalEarnings: 0,
    totalCommission: 0,
    pendingEarnings: 0,
    availableBalance: 0,
    totalWithdrawn: 0
  },
  
  orders: []
  
};


function calculateSettlement(amount) {
  
  const commission =
    amount * NEXVORA_DATA.commissionRate / 100;
  
  const sellerAmount =
    amount - commission;
  
  return {
    orderAmount: amount,
    commission: commission,
    sellerAmount: sellerAmount
  };
  
}