// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const Shenk = await ethers.getContractFactory("Shenk")
  const shenk = await Shenk.deploy("Shenk", "SHNK")

  await shenk.deployed()
  console.log(`Contract successfully deployed to ${shenk.address}`)

  const newItemId = await shenk.mint("https://ipfs.io/ipfs/QmPFh9aiW8iwSDM2K1E9jXiqwG33zsf4xYeKJwb43PbHsA")
  console.log(`NFT minted successfully :: ${newItemId}`)

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
