import { history, news, priceTarget } from "~/types/api/yfinance"


export class Ticker {
    private BASEURL = "https://y-finance.vercel.app/api/"
    constructor(public ticker:string) {}

    async history(period:string="1mo", interval:string="1d",start:string="", end:string=new Date(Date.now()).toISOString(), prepost:boolean=false, autoAdjust:boolean=true, backAdjust:boolean=false, repair:boolean=false):Promise<history[]> {
        return (await fetch(this.BASEURL+`${this.ticker}/history`)).json()
    }
    async news():Promise<news[]>{
        return (await fetch(this.BASEURL+`${this.ticker}/news`)).json()
    }
    async info(){
        return (await fetch(this.BASEURL+`${this.ticker}/info`)).json()
    }
    async priceTarget():Promise<priceTarget>{
        return (await fetch(this.BASEURL+`${this.ticker}/price-target`)).json()
    }
    async earnings(){
        return (await fetch(this.BASEURL+`${this.ticker}/earnings`)).json()
    }
}

export async function globalNews():Promise<news[]> {
    const news = (await fetch("https://y-finance.vercel.app/api/news")).json()
    return news
}