export type history = {
    Open:number,
    High:number,
    Low:number,
    Close:number,
    Volume:number,
    Dividens:number,
    StockSplit:number,
    Date: {
        "Date":string,
        "Tz":string
    }
}

export type news = {
    uuid:string,
    title:string,
    publisher:string,
    link:string,
    providerPublishTime:number,
    type:"Story",
    thumbnail:{
        resolutions:{
            url:string,
            width:number,
            height:number,
            tag:string
        }[]
    },
    relatedTickers?:string[]
}

export type priceTarget = {
    current:number,
    low:number,
    high:number,
    mean:number,
    median:number
}