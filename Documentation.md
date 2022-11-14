# Tax_Invoice_Automation

## Overview
This project is made for automating the tax paying process for the Customer & the Business tax, while narrowing down the tax collecting process for the Government. 

---
## Collaboaters
- Ajeet Ram Verma
- Vikash Kumar
- Bhupendra Chouhan 
---

The Transaction flow Chart:
![flow_chart](https://i.imgur.com/p3rYDQK.png)

# Smart Contract

## This smart contract are capable to doing real time tax deduction.
### In this smart contract have 3 are in main role 1.Customer, 2.Businessman, 3.Government.
### When customer are going to pay some amount to the businessman then it will call pay_to_busin function and this function after taking the tax_bal on the basis of tax_rate which is provided by government,it will send actual_amount(=_amount-tax) to the businessman.
### when we call the pay_tax function it will first check that tax_bal is recieved or not if recieved then it will send to the government acount.

