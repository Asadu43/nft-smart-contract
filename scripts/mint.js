const { ethers } = require("hardhat")
const shenkJSON = require("../artifacts/contracts/Shenk.sol/Shenk.json")

async function main() {
  const abi = shenkJSON.abi
  const provider = new ethers.providers.InfuraProvider("rinkeby", "c9f97db119954414876ad3649ddb8c69")
  const wallet = new ethers.Wallet("628fa839207d257a0c26d7d5c01a669eaf94f308f2e30eb464d89d2a600ddad0", provider)
  const signer = wallet.connect(provider)
  const cryptoBeetles = new ethers.Contract("0xdAa821f6216C41b356c21caDA773bDf24CFAbb37", abi, signer)
  const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmU6PHkjuSUQMRJuFu1DEQ6yMSDrZvzpj85wuWhmA3U7Nb")
  console.log(`NFT minted! ${newItemId}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
