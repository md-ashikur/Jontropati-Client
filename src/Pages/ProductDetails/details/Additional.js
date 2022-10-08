import React from "react";
import "./Additional.css";
const Additional = () => {
  return (
    <div>
      <table class="table-fixed a-table text-left w-full">
        
        <tbody>
          <tr>
            <th className="t-th">Frame</th>
            <td className="t-td">Aluminum</td>
         
          </tr>
          <tr>
            <th className="t-th">Weight (W/O Wheels)</th>
            <td className="t-td">20 LBS</td>
           
          </tr>
          <tr>
            <th className="t-th">Width</th>
            <td className="t-td">24″</td>
          </tr>
          <tr>
            <th className="t-th">Color</th>
            <td className="t-td">Black, Blue, Gray, Green, Purple, Red, White, Yellow</td>
          </tr>
          <tr>
            <th className="t-th">Size</th>
            <td className="t-td">L, M, S, XL, XS, XXL</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Additional;
