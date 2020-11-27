

const awarderABI = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "award",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "employer",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "hunter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "awarded",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "devcashAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
const awarderAddress = '0x7DE09eE61Fd4c326098bE7C4C86b80408707DB9b';
let awarder
let provider
let signer

let torus
let torusWeb3Provider
let torusSigner

let torusUserInfo

const devcashABI = [
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
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
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "remaining",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "balances",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "bountyHunter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "bounty",
				"type": "uint256"
			}
		],
		"name": "payBounty",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const devcashAddress = "0x0fca8Fdb0FB115A33BAadEc6e7A141FFC1bC7d5a"
let devcash
let decimals
let symbol

async function initialize(web3) {
	console.log("reradsffsd")
  //await ethereum.enable()
  //let provider = new ethers.providers.Web3Provider(web3.currentProvider)
  //let accounts = await provider.listAccounts()
  //signer = provider.getSigner(accounts[0])
  //let EthBalance = ethers.utils.formatEther(await signer.getBalance())



	torus = new Torus();
	await torus.init();
	await torus.login();
	await torus.ethereum.enable()
 	torusWeb3Provider = new Web3(torus.provider);


	// torus = new DirectWebSdk({
	//  baseUrl: "http://localhost:8899/",
	//  GOOGLE_CLIENT_ID: "372001088800-bmpm4hbe8qon70bohfft8rfu5tioct92.apps.googleusercontent.com",
	//  proxyContractAddress: "0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183", // details for test net
	//  network: "ropsten", // details for test net
 // });
 //torusUserInfo = await torus.triggerLogin("google", "adevuyst");

 let torusProvider = new ethers.providers.Web3Provider(torus.provider)
 console.log(torusProvider)
 let torusAccounts = await torusProvider.listAccounts()
 torusSigner = torusProvider.getSigner(torusAccounts[0])
 console.log(torusSigner)
	awarder = new ethers.Contract(awarderAddress,awarderABI,torusSigner)
	devcash = new ethers.Contract(devcashAddress,devcashABI,torusSigner)
	console.log(awarder)
	console.log(signer)

	decimals = await devcash.decimals()
  symbol = await devcash.symbol()
  await getBalance()
  await getApproved()
}

async function getBalance(){

  let balance = await devcash.balanceOf(torusSigner._address)

	balance = ethers.utils.formatUnits(balance,decimals)
	balance = ethers.utils.commify(balance)
  document.getElementById("balanceLabel").innerHTML = "Balance: " + balance + " " + symbol
}

async function getApproved(){
	let approved = await devcash.allowance(torusSigner._address, awarderAddress)
	approved = ethers.utils.formatUnits(approved,decimals)
	approved = ethers.utils.commify(approved)
	console.log(torusSigner._address)
	console.log(approved)
	document.getElementById("approvedLabel").innerHTML = "Approved: " + approved + " " + symbol

}

async function approve() {
  let amount = document.getElementById("approveAmount").value;
  amount = ethers.utils.parseUnits(amount, decimals)
  await devcash.approve(awarderAddress,amount)
}

async function award(){
	let hunter = document.getElementById("bountyHunter").value;
	let name = document.getElementById("bountyName").value;
	let description = document.getElementById("bountyDescription").value;
	let amount = document.getElementById("bountyAmount").value;
	amount = ethers.utils.parseUnits(amount, decimals)
	await awarder.award(description,hunter,amount)

}
