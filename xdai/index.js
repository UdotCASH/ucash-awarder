const awarderABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "who",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const awarderAddress = "0x34d023B7a9acD93881bF8A9c88247a87cf76F18A"
let awarder
let provider
let signer

let persistentProvider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/3fd6400b02264579ad009cdc6879dcaf')

let torusUserInfo

const ucashABI = [
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
const ucashAddress = "0x92e52a1A235d9A103D970901066CE910AAceFD37"
let ucash
let decimals
let symbol

let eventLogs

async function initialize(web3) {
	let ucashPersistent = new ethers.Contract(ucashAddress,ucashABI,persistentProvider)
	decimals = await ucashPersistent.decimals()
  symbol = await ucashPersistent.symbol()

	await getAwarded()
	await populateAwarded()

	try{
  await ethereum.enable()
  provider = new ethers.providers.Web3Provider(web3.currentProvider)
  let accounts = await provider.listAccounts()
  signer = provider.getSigner(accounts[0])

  let EthBalance = ethers.utils.formatEther(await signer.getBalance())

	awarder = new ethers.Contract(awarderAddress,awarderABI,signer)
	ucash = new ethers.Contract(ucashAddress,ucashABI,signer)

  await getBalance()
  await getApproved()
} catch {
	document.getElementById("balanceLabel").innerHTML = "metamask not connected"
	document.getElementById("approvedLabel").innerHTML = ""
}

}

async function getBalance(){

  let balance = await ucash.balanceOf(signer._address)

	balance = ethers.utils.formatUnits(balance,decimals)
	balance = ethers.utils.commify(balance)
  document.getElementById("balanceLabel").innerHTML = "Balance: " + balance + " " + symbol
}

async function getApproved(){
	let approved = await ucash.allowance(signer._address, awarderAddress)
	approved = ethers.utils.formatUnits(approved,decimals)
	approved = ethers.utils.commify(approved)
	console.log(signer._address)
	console.log(approved)
	document.getElementById("approvedLabel").innerHTML = "Approved: " + approved + " " + symbol

}

async function approve() {
  let amount = document.getElementById("approveAmount").value;
  amount = ethers.utils.parseUnits(amount, decimals)
  await ucash.approve(awarderAddress,amount)
}

async function award(){
	let hunter = document.getElementById("bountyHunter").value;
	let description = document.getElementById("bountyDescription").value;
	let amount = document.getElementById("bountyAmount").value;
	amount = ethers.utils.parseUnits(amount, decimals)
	await awarder.award(description,hunter,amount)
}

async function getAwarded() {
	console.log("get Event Logs")
	let topic = ethers.utils.id("awarded(address,address,string,uint256)");
	let filter = {
    address: awarderAddress,
    fromBlock: 11330000,
    toBlock: 99999999,
    topics: [ topic ]
	}

	let result = await persistentProvider.getLogs(filter)	//get event logs of all instances of bounties awarded
	eventLogs = new Array()
	for (n=0;n<result.length;n++){
		let log = new Object()
		let data = result[n].data
		data = data.substring(2)
		data = data.match(/.{1,64}/g) //divide data from event log into 64 length sections
		for (j=0;j<6;j++){
			data[j] = "0x" + data[j]
		}
		let descriptionData = ""
		for (j=5;j<data.length;j++){
			descriptionData += data[j]
		}
		let poster = "0x" + data[0].substring(26)
		let hunter = "0x" + data[1].substring(26)
		let amount = ethers.utils.formatUnits(ethers.utils.bigNumberify(data[3]),8)
		let description = web3.toAscii(descriptionData)
		log.poster = poster
		log.hunter = hunter
		log.amount = amount
		log.description = description
		log.txHash = result[n].transactionHash
		eventLogs.push(log)
	}
}

async function populateAwarded() {
	for(let n=0;n<eventLogs.length;n++){
		let log = eventLogs[n]
		let row=document.createElement("tr");
		cell1 = document.createElement("a");
		cell2 = document.createElement("td");
		cell3 = document.createElement("a");
		cell4 = document.createElement("td");

		let poster = log.poster
		let hunter = log.hunter
		let amount = log.amount + " " + symbol
		let description = log.description

		cell1.innerHTML = poster + ""
		cell1.href = "https://etherscan.io/address/" + poster
		cell2.innerHTML = hunter + ""
		cell2.href = "https://etherscan.io/address/" + hunter
		textnode2=document.createTextNode(hunter);
		cell3.innerHTML = amount
		cell3.href = "https://etherscan.io/tx/" + log.txHash
		textnode4=document.createTextNode(description)

		cell4.appendChild(textnode4);

		row.appendChild(cell1);
		row.appendChild(cell2);
		row.appendChild(cell3);
		row.appendChild(cell4);

		document.getElementById("BATable").appendChild(row);
	}
}
