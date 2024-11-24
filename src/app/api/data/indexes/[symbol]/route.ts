import yahooFinance from 'yahoo-finance2';

export async function GET(req: Request, { params }: { params: Promise<{ symbol: string }> }) {
 const symbol = (await params).symbol
 const today = new Date(Date.now())
 const data = await yahooFinance.chart(symbol,{interval:"1m",period2:new Date().setDate(today.getDate()-8),period1:today})


 return Response.json({current:data.meta.regularMarketPrice, cTime:data.meta.regularMarketTime, yearHigh:data.meta.fiftyTwoWeekHigh,yearLow:data.meta.fiftyTwoWeekLow,symbol:data.meta.symbol,data:data})
}