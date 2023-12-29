import React from "react";

export const Annu = () => {
    const mystyle={
        width:"30%",
        height:"340px",
    }

    const mystyle1={
        width:"60%",
        height:"340px",
    }
  return (
    <>
      <section className="annu background">
        <div className="container d_flex">
          <div className="img" style={mystyle}>
            <img
              src="https://github.com/sunil9813/Bonik-Ecommerice-Website-in-React/blob/master/public/images/banner-1.png?raw=true"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="img" style={mystyle1}>
            <img
              src="https://github.com/sunil9813/Bonik-Ecommerice-Website-in-React/blob/master/public/images/banner-2.png?raw=true"
              alt=""
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </section>
    </>
  );
};
