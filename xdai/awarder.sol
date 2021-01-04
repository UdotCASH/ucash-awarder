pragma solidity ^0.5.11;

contract ERC20Basic {
  function totalSupply() public view returns (uint256);
  function balanceOf(address who) public view returns (uint256);
  function transfer(address to, uint256 value) public returns (bool);
  event Transfer(address indexed from, address indexed to, uint256 value);
}

contract ERC20 is ERC20Basic {
  function allowance(address owner, address spender) public view returns (uint256);
  function transferFrom(address from, address to, uint256 value) public returns (bool);
  function approve(address spender, uint256 value) public returns (bool);
  event Approval(address indexed owner, address indexed spender, uint256 value);
}

contract awarder{
    address public devcashAddress = 0x0fca8Fdb0FB115A33BAadEc6e7A141FFC1bC7d5a;
    event awarded(address employer, address hunter, string description, uint amount);
    function award(string memory description, address hunter, uint amount) public{
        ERC20(devcashAddress).transferFrom(msg.sender,hunter,amount);
        emit awarded(msg.sender,hunter,description,amount);
    }
}
