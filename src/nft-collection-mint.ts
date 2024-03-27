import { CollectionType, EvmChain, Nft } from "@apillon/sdk";
import { EnvLevel, prepareEnv } from "./helpers";

(async () => {
  prepareEnv(EnvLevel.NFT);
  const nft = new Nft({
    key: process.env.APILLON_API_KEY,
    secret: process.env.APILLON_API_SECRET,
  });

  const collection = await nft.collection(process.env.APILLON_COLLECTION);
  const res = await collection.mint({
    receivingAddress: "0x65266dbf8259968f54747bc83155238370d3808a",
    quantity: 1,
  });
  console.log("TransactionHash: ", res.transactionHash);
})().catch(async (err) => {
  console.log(err);
});
