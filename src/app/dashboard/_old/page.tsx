"use client";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { tools } from './dashboard';
import { pageData } from './getData';


export default function Page() {
  
  const {articles, biggestGainer, biggestLoser, mostActive, user} = pageData();
  const {data, setData} = tools();

  const addUserMetadata = async () => {
    if (user) {
      await fetch(`/api/user/metadata/public`, {
        method: 'POST',
        body: JSON.stringify({ userId: user.id, metadata: { } }),
      });
    }
  };


  
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
          <form onSubmit={async (e) => {}}>
            <input type="text" name="ticker" placeholder="Search Ticker" />
            <button type="submit">Add to profile</button>
          </form>
        </div>
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
