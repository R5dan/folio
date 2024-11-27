
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export async function StockHeader() {



    return (
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
    )
}