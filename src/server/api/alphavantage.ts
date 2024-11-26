import { promises } from "dns";
import type { biggestChangeer, GLOBAL_QUOTE, NEWS_SENTIMENT } from "~/types/api/alphavantage";

const apiKey = process.env.ALPHAVANTAGE_API_KEY;


export async function getRealtimeTicker(ticker: string):Promise<GLOBAL_QUOTE> {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${apiKey}`;
    const response = await fetch(url);
    return await response.json();
}

export async function getBiggestChangers():Promise<biggestChangeer> {
    const url = `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${apiKey}`;
    const response = await fetch(url);
    console.log(response.json());
    return await response.json();
}

export async function getNews(ticker:string[]= [], limit=50, fromDate="", toDate=""):Promise<NEWS_SENTIMENT> {
    const yesterday = new Date(new Date(Date.now()).getDate() - 1).toISOString();
    console.log(yesterday);
    fromDate = fromDate?fromDate:yesterday;
    limit = Math.min(limit, 1000);
    const url = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker.join(",")}&apikey=${apiKey}&limit=${limit}${fromDate?`&time_from=${fromDate}`:""}${toDate?`&time_to=${toDate}`:""}`;
    const response = await fetch(url);
    return await response.json();
}