# MuniBond

Overall, working on two distinct aspects of this. 

1) Algorand contracts that work in the backgound. token creation and persistence. reference to price and time standards. This is Algorand specific and custom made for this project. Right now there is only one standardized bond contract but the store is being integrated with the intention of having the option to change the timeperiod, interest rate and repayment structure. End vision of this would be to have the functionality to modify and create unique bonds to sell as OTC transactions between two parties. I am looking to port this over to a slightly more user friendly and well known L1 like AVAX or ETH but that opens up a fairly large reinvestment in time as all the contracts are written in an entirely different language and use a unique compiler to the Algorand ecosystem (PyTeal and Teal). 



2) Storefronts. front end setup and web page. interaction with wallets. integration with AAVE. This is a cloned repo I am in the process of modifying to integrate with GCP and my created contracts. It feels a bit like being airdropped into the middle of Alaska with just a compass and the rough idea that there is a town "that-a-way." But it's coming along. Will update as I bungle through it.


![Flow of a bond](https://user-images.githubusercontent.com/42774042/174642625-d03dcbbe-cd7c-4e65-a392-b6168e80fa6e.png)
