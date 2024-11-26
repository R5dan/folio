import { getBiggestChangers, getNews } from "~/server/api/alphavantage";

export async function pageData() {
    const biggestChangeer = await getBiggestChangers()
    const biggestGainer = biggestChangeer.top_gainers;
    const biggestLoser = biggestChangeer.top_losers;
    const mostActive = biggestChangeer.most_actively_traded;


    const news = await getNews([], 100);
    const articles = news.feed;
    return {
        articles,
        biggestGainer,
        biggestLoser,
        mostActive
    }
}