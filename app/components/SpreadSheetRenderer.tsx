
import React,{useState} from "react"
import { SpreadsheetData } from "../types";
import SingleSpreadsheet from "./SingleSpreadsheet";
const SpreadsheetRenderer=()=>{
    const [spreadsheets, setSpreadsheets] = React.useState<SpreadsheetData[]>([
        {
          title: "Spreadsheet 1",
          rows: [
            [{ value: "" }, { value: "" }, { value: "" }],
            [{ value: "" }, { value: "" }, { value: "" }],
            [{ value: "" }, { value: "" }, { value: "" }],
          ],
        },
      ]);
    
      const [selectedSpreadsheetIndex, setSelectedSpreadsheetIndex] = useState(0);
      return (
        <div className="flex">
          <SingleSpreadsheet
            spreadsheet={spreadsheets[selectedSpreadsheetIndex]}
            setSpreadsheet={(spreadsheet) => {
              setSpreadsheets((prev) => {
                console.log("setSpreadsheet", spreadsheet);
                const newSpreadsheets = [...prev];
                newSpreadsheets[selectedSpreadsheetIndex] = spreadsheet;
                return newSpreadsheets;
              });
            }}
          />
        </div>
      );
}

export default SpreadsheetRenderer
