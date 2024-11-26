import type { PolygonNews } from "~/types/api/polygon";

const apiKey = process.env.POLYGON_API_KEY;


export async function getNews(ticker: string, limit: number): Promise<PolygonNews>  {
    limit = Math.min(limit, 1000);
    const url = `https://api.polygon.io/v2/reference/news?${ticker?'ticker='+ticker+"&":''}limit=${limit}&apiKey=${apiKey}`;
    const response = await fetch(url);
    return await response.json();
}

