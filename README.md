# MuniBond Issuance with PyTeal and Python SDK
---
To install all required packages: `pip install -r requirements`
A demo script is attached at the bottom of main_publisher.py, to run the demo:
1. submit the publisher and buyer's mnemonic and public address
2. submit the `payment_id` field accepted as payment token, and make sure that your buyer's account is already funded with the asset
3. fetch a recent block number and submit it in the `closure` field.  





This is setting up a large initial transfer. 

Then a series of timed drops that are claimable from an escrow account. Token is created for both interest payments and par value (face value) of the bond
Main Publisher has a suite of settings that are in place to run a demo. Need to be removed for actual product.



## To DO:

Price Oracle
Pith? Need to dig into Algorand compatible stuff

Front End. 
Marketplace.
