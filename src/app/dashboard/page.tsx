
import { StockHeader } from "./stocks"
import Script from 'next/script';

export default async function Page() {
    const articles:{url:string, title:string}[] = []

    return (
        <div>
            <Script id="load-vars" strategy="beforeInteractive">

            </Script>
        <div>
          <h1>Dashboard</h1>
        </div>
        <StockHeader/>
        <div className="span span-grid">
          <div>
            <form>
              <input type="text" name="ticker" placeholder="Search Ticker" className="text-black"/>
              <button type="submit">Add</button>
            </form>
          </div>
          <div>
            <div>
              <h2>News</h2>
            </div>
            <div>
              {articles?.map((article:{url:string, title:string}) => (
                <div key={article.url}>
                  <a href={article.url}>{article.title}</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
}