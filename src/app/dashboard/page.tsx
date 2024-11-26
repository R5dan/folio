"use client";

import { pageData } from "./getData";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useEffect, useState } from 'react';
import { news } from "~/types/api/yfinance";
import { company } from "~/types/api/alphavantage";

export default function Page() {
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
  
  return (
    <div>
      <div className="flex flex-grid">
        {/* Biggest Gainer  */}
        <div className="flex"><div id="BG1"></div><ArrowUpwardIcon/></div>
        <div><div id="BG2"></div><ArrowUpwardIcon/></div>
        <div><div id="BG3"></div><ArrowUpwardIcon/></div>
        {/* Biggest Loser  */}
        <div><div id="BL1"></div><ArrowDownwardIcon/></div>
        <div><div id="BL2"></div><ArrowDownwardIcon/></div>
        <div><div id="BL3"></div><ArrowDownwardIcon/></div>
        {/* Most Active  */}
        <div><div id="BA1"></div></div>
        <div><div id="BA2"></div></div>
        <div><div id="BA3"></div></div>
      </div>
      <div>
        <h1>Dashboard</h1>
      </div>
      
      <div className="span span-grid">
        <div>
          <div>
            <h2>News</h2>
          </div>
          <div>
            {data.articles?.map((article:{url:string, title:string}) => (
              <div key={article.url}>
                <a href={article.url}>{article.title}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
