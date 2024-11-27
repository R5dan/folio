import { useEffect, useState } from 'react';
import type { news } from "~/types/api/yfinance";
import type { company } from "~/types/api/alphavantage";
import { pageData } from "./getData";

export function tools() {
    const [data, setData] = useState({
        articles: [],
        biggestGainer: [],
        biggestLoser: [],
        mostActive: []
      });
    
   
      useEffect(() => {
        const fetchData = async () => {
          const result = await pageData();
          setData(result);
          console.log("SETTING DATA", result);
        };
        fetchData();
      }, []);
    
      useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
          i += 1;
    
          function getHTML(data: company) {
            if (!data) return '';
            console.log(data);
            return (`
              <div>
                <span>${data.ticker}</span><br/>
                <span>${data.change_percent}</span>
              </div>
            `);
          }
          const { articles ,biggestGainer, biggestLoser, mostActive }:{articles:news[], biggestGainer:company[], biggestLoser:company[], mostActive:company[]} = data;
    
          if (biggestGainer.length && biggestLoser.length && mostActive.length) {
            document.getElementById("BG1")!.innerHTML = getHTML(biggestGainer[(i * 3) - 2]);
            document.getElementById("BG2")!.innerHTML = getHTML(biggestGainer[(i * 3) - 1]);
            document.getElementById("BG3")!.innerHTML = getHTML(biggestGainer[i * 3]);
            document.getElementById("BL1")!.innerHTML = getHTML(biggestLoser[(i * 3) - 2]);
            document.getElementById("BL2")!.innerHTML = getHTML(biggestLoser[(i * 3) - 1]);
            document.getElementById("BL3")!.innerHTML = getHTML(biggestLoser[i * 3]);
            document.getElementById("BA1")!.innerHTML = getHTML(mostActive[(i * 3) - 2]);
            document.getElementById("BA2")!.innerHTML = getHTML(mostActive[(i * 3) - 1]);
            document.getElementById("BA3")!.innerHTML = getHTML(mostActive[i * 3]);
          }
    
          if (i === 3) {
            i = 0;
          }
        }, 10000);
    
        return () => clearInterval(intervalId);
      }, [data]);

    return {data, setData, articles, biggestGainer, biggestLoser, mostActive}
}