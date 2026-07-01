import type { Stock } from "@/types/stock";

export type StockWithPER = Stock & {
  per: number;
};

export function calculatePER(stock: Stock): StockWithPER {
  return {
    ...stock,
    per: Number((stock.price / stock.eps).toFixed(2)),
  };
}