import { getBiggestChangers } from "~/server/api/alphavantage";
import { globalNews } from "~/server/api/yfinance"
import type { biggestChanger } from "~/types/api/alphavantage";


let cache:{
    data?:biggestChanger,
    timestamp:number
} = {
    data:undefined,
    timestamp:0
}

export async function pageData() {
    const now = new Date().getTime()
    let biggestChangeer:biggestChanger
    if (cache.data && now - cache.timestamp < 24 * 60 * 60 * 1000) {
        biggestChangeer = cache.data
    } else {
        biggestChangeer = await getBiggestChangers()
    }
    const biggestGainer = biggestChangeer.top_gainers;
    const biggestLoser = biggestChangeer.top_losers;
    const mostActive = biggestChangeer.most_actively_traded;


    const articles = await globalNews();
    return {
        articles,
        biggestGainer,
        biggestLoser,
        mostActive
    }
}