import { useState, useEffect } from "react";
import styles from "../../styles/simulator/company.module.css";

const CompHeader = (props: any) => {
  const WAIT_TIME = 3000;
  const [stock_price, setPrice] = useState("N/A");
  const [stock_change, setChange] = useState("N/A");

  console.log(stock_price)
  
  useEffect(() => {
    const data = setInterval(() => {
      fetch(`/api/${props.CompanyName}/getPrice`)
      .then((res) => res.json())
      .then((result_value) => {
        setPrice(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [stock_price]); 

  useEffect(() => {
    const data = setInterval(() => {
      fetch(`/api/${props.CompanyName}/getChange`)
      .then((res) => res.json())
      .then((result_value) => {
        setChange(result_value)
      })

    }, WAIT_TIME);
    return () => clearInterval(data);
  }, [stock_change]); 
  
  return (
    <div>
      <div className={styles.top_container}>
        <div className={styles.comp_logo}>
          <p>{props.CompanyShortName}</p>
        </div>
        <p className={styles.comp_name}>{props.CompanyFullName}</p>
        <p className={styles.stock_price}>{stock_price}</p>
        <p className={styles.price_change}>{stock_change}%</p>
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
      <hr className={styles.seperate_line} />
    </div>
  );
};

export default CompHeader;




