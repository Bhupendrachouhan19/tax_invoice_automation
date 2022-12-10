// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract Transactions
{
    
    
    struct customer 
    {
        uint cus_bal;
        address cus_add;   
    }

    customer public cus;
    struct businessman
    {
        uint busin_bal;
        address payable busin_add;    
    }
    businessman public buss;

    struct government 
    {
        uint tax_bal;
        address payable gov_add;
        uint gov_bal;
        uint tax_rate;

    }

    government public gov;

    receive() external payable
    {
      cus.cus_add = msg.sender;
      cus.cus_bal = msg.value;
    }

    function pay_to_buss(uint _amount, address payable _busin_add, uint _tax_rate) public 
    {
       // require(cus.cus_add==msg.sender,"you are not aplicable");
        buss.busin_add = _busin_add;
        gov.tax_rate = _tax_rate;
        gov.tax_bal = _amount*(gov.tax_rate)/100;
        uint actual_amount = _amount - gov.tax_bal;
        buss.busin_add.transfer(actual_amount); 
        buss.busin_bal+= actual_amount;
        cus.cus_bal-= _amount;    
    }

    function pay_tax(address payable _gov_add) public
    {
        //require(cus.cus_add==msg.sender,"you are not the owner, abort !");
        require(gov.tax_bal>0,"not sufficient tax");
        gov.gov_add = _gov_add;
        gov.gov_add.transfer(gov.tax_bal);
        gov.gov_bal+= gov.tax_bal;
        gov.tax_bal=0;           
    }
}