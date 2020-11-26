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
const awarderAddress = "0x2b6046447FEDced0713F70776F51f8b9663fd65e"//'0x7DE09eE61Fd4c326098bE7C4C86b80408707DB9b';
let awarder
let provider
let signer

let torus
let torusProvider
let torusProviderWeb3
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
const devcashAddress = "0x0f54093364b396461AAdf85C015Db597AAb56203"//"0x0fca8Fdb0FB115A33BAadEc6e7A141FFC1bC7d5a"
let devcash
let decimals
let symbol

async function initialize(web3) {
	console.log("initialize")
	torus = new DirectWebSdk({
	 baseUrl: "https://award-devcash-torus.surge.sh/",
	 GOOGLE_CLIENT_ID: "946900817635-ge3ir1ptdum72ouird7a8mf03vo9ntk1.apps.googleusercontent.com",
	 proxyContractAddress: "0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183", // details for test net
	 network: "ropsten", // details for test net
 });
 await torus.init()
 console.log(torus)
 torusUserInfo = await torus.triggerLogin({
  typeOfLogin: "google",
  verifier: "google-tal",
  clientId: "946900817635-ge3ir1ptdum72ouird7a8mf03vo9ntk1.apps.googleusercontent.com",
});
 console.log("torus user info")
	provider = ethers.getDefaultProvider("ropsten")
console.log("arelk")
let torusWallet = new ethers.Wallet("0x" + torusUserInfo.privateKey, provider);
 console.log(torusWallet)
	awarder = new ethers.Contract(awarderAddress,awarderABI,torusWallet)
	devcash = new ethers.Contract(devcashAddress,devcashABI,torusWallet)
	console.log(awarder)
	console.log(signer)

	decimals = await devcash.decimals()
  symbol = await devcash.symbol()
  await getBalance()
  await getApproved()
}

async function getBalance(){

  let balance = await devcash.balanceOf(torusUserInfo.publicAddress)

	balance = ethers.utils.formatUnits(balance,decimals)
	balance = ethers.utils.commify(balance)
  document.getElementById("balanceLabel").innerHTML = "Balance: " + balance + " " + symbol
}

async function getApproved(){
	let approved = await devcash.allowance(torusUserInfo.publicAddress, awarderAddress)
	approved = ethers.utils.formatUnits(approved,decimals)
	approved = ethers.utils.commify(approved)
	document.getElementById("approvedLabel").innerHTML = "Approved: " + approved + " " + symbol

}

async function approve() {
  let amount = document.getElementById("approveAmount").value;
  amount = ethers.utils.parseUnits(amount, decimals)
  await devcash.approve(awarderAddress,amount)
}

async function award(){
	let hunter = document.getElementById("bountyHunter").value;
	let description = document.getElementById("bountyDescription").value;
	let amount = document.getElementById("bountyAmount").value;
	amount = ethers.utils.parseUnits(amount, decimals)
	await awarder.award(description,hunter,amount)

}
