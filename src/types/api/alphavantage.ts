export type GLOBAL_QUOTE = {
    "01. symbol": string;
    "02. open": string;
    "03. high": string;
    "04. low": string;
    "05. price": string;
    "06. volume": string;
    "07. latest trading day": string;
    "08. previous close": string;
    "09. change": string;
    "10. change percent": string;
}

export  type NEWS_SENTIMENT = {
    "items":string;
    "sentiment_score_defenition":string;
    "relevance_score_defenition":string;
    "feed":{
        "title":string;
        "url":string;
        "time_published":string;
        "authors":string[];
        "summary":string;
        "banner_image":string;
        "source":string;
        "catagory_within_source":string;
        "source_domain":string;
        "topics":{
            "topic":string;
            "relevance_score":string;
        }[];
        "overall_sentiment_score":string;
        "overall_sentiment_reasoning":string;
        "ticker_sentiment":{
            "ticker":string;
            "relevance_score":string;
            "ticker_sentiment_score":string;
            "ticker_sentiment_label":string;
    }[];
    }[];
}

export type company = {
    "ticker":string;
    "price":string;
    "change_amount":string;
    "change_percent":string;
    "volume":string;
}

export type biggestChanger = {
    "metadata":string;
    "last_updated":string;
    "top_gainers":company[];
    "top_losers":company[];
    "most_actively_traded":company[];
}