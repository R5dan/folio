export type PolygonNews = {
    "next_url": string,
    "request_id": string,
    "results": {
        "amp_url": string,
        "article_url": string,
        "author": string,
        "description": string,
        "id": string,
        "image_url": string,
        "insights": Array<{
            "sentiment": "positive"|"neutral"|"negative",
            "sentiment_reasoning": string,
            "ticker": string,
        }>,
        "keywords": Array<string>,
        "published_utc": string,
        "publisher": {
            "favicon_url": string,
            "homepage_url": string,
            "logo_url": string,
            "name": string,
        },
        "tickers": Array<string>,
        "title": string,
    }[],
    "status": string,
}