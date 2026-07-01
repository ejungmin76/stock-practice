import type { Stock } from "@/types/stock";

export async function getStocks(): Promise<Stock[]> {
  return [
    { code: "005930", name: "삼성전자", price: 80000, eps: 5000 },
    { code: "000660", name: "SK하이닉스", price: 180000, eps: 9000 },
    { code: "035420", name: "NAVER", price: 210000, eps: 7000 },
    { code: "035720", name: "카카오", price: 55000, eps: 2500 },
    { code: "207940", name: "삼성바이오로직스", price: 780000, eps: 12000 },
  ];
}