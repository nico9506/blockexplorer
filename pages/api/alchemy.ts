import type { NextApiRequest, NextApiResponse } from "next";
import { Alchemy, Network } from "alchemy-sdk";

const alchemy = new Alchemy({
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ error: "Missing address" });
  }

  if (typeof address !== "string") {
    return res.status(400).json({ error: "Invalid address" });
  }

  try {
    const balance = await alchemy.core.getBalance(address);
    res.status(200).json({ balance: (Number(balance) / 1e18).toFixed(4) });
  } catch (error) {
    res.status(500).json({ Msg: "Failed to fetch balance", Error: error });
  }
}
