pragma solidity ^0.8.4;

abstract contract ERC20 {
  function balanceOf(address who) public virtual view returns (uint256);
  function transferFrom(address from, address to, uint256 value) public virtual returns (bool);
}

contract awarder{
    address public ucashAddress = 0x92e52a1A235d9A103D970901066CE910AAceFD37;
    event awarded(address employer, address hunter, string description, uint amount);
    function award(string memory description, address hunter, uint amount) public{
        ERC20(ucashAddress).transferFrom(msg.sender,hunter,amount);
        emit awarded(msg.sender,hunter,description,amount);
    }
}
