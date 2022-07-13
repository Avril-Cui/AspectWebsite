import { useState, useEffect } from "react";
import styles from "../../../styles/simulator/company.module.css";

const CompHeader = (props: any) => {
  const WAIT_TIME = 3000;
  const [stock_price, setPrice] = useState("N/A");
  const [stock_change, setChange] = useState("N/A");

  console.log(stock_price)
  
  // useEffect(() => {
  //   const data = setInterval(() => {
  //     fetch(`/api/${props.CompanyName}/getPrice`)
  //     .then((res) => res.json())
  //     .then((result_value) => {
  //       setPrice(result_value)
  //     })

  //   }, WAIT_TIME);
  //   return () => clearInterval(data);
  // }, [stock_price]); 

  // useEffect(() => {
  //   const data = setInterval(() => {
  //     fetch(`/api/${props.CompanyName}/getChange`)
  //     .then((res) => res.json())
  //     .then((result_value) => {
  //       setChange(result_value)
  //     })

  //   }, WAIT_TIME);
  //   return () => clearInterval(data);
  // }, [stock_change]); 
  
  return (
      <div className={styles.top_container}>
        <div className={styles.header_container}>
          <div style={{height: 25}}/>
          <div className={styles.top_container_inline}>
            <div className={styles.comp_logo}>
              <p>{props.CompanyShortName}</p>
            </div>
            <p className={styles.comp_name}>{props.CompanyFullName}</p>
            <div className={styles.buttons}>
            <div>
              <button className={styles.watch_list}>
                <p>
                  <span>&#9734;</span> Watchlist
                </p>
              </button>
            </div>
            <div>
              <button className={styles.trade_button}>
                <p>💰 Trade This Stock √</p>
              </button>
            </div>
            </div>
          </div>
          
        <p className={styles.index_name}>APINX</p>
        <p className={styles.stock_price}>685.23 <span>ASD</span></p>
        <p className={styles.price_change}>+12.83  (+1.86%)</p>
        <p className={styles.market_state}>MARKET CLOSED  <span>(MARKET OPEN JULY 10TH, 8:00 EST)</span></p>

        <table className={styles.price_info_table}>
          <tr>
            <th>LAST CLOSE</th>
            <th>MARKET CAP</th>
            <th>7D TREND</th>
            <th>1Y TREND</th>
          </tr>
          <tr>
            <td className={styles.normal_color}>US$607.99</td>
            <td className={styles.normal_color}>US$726.4b</td>
            <td className={styles.conditional_color}>+2.3%</td>
            <td className={styles.conditional_color}>+19.0%</td>
          </tr>
        </table>


        {/* <p className={styles.stock_price}>{stock_price}</p>
        <p className={styles.price_change}>{stock_change}%</p> */}
        
        </div>
      </div>
  );
};

export default CompHeader;




