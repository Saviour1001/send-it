import { Connection } from "@solana/web3.js";

export const CONNECTION = new Connection(
  process.env.RPC_ENDPOINT || "https://api.mainnet-beta.solana.com",
  {
    commitment: "confirmed",
    wsEndpoint: process.env.WS_ENDPOINT,
  }
);

export const tokenAddresses = {
  sol: "So11111111111111111111111111111111111111112",
  usdc: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
  send: "SENDdRQtYMWaQrBroBrJ2Q53fgVuq95CV9UPGEvpCxa",
};
