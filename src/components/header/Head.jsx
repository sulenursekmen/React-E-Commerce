import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+90 555 55 55</label>

            <i className="fa fa-envelope"></i>
            <label>e-ticaret@gmail.com</label>
          </div>

          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Need Helps</label>
            <span>❤️</span>
            <label>TR</label>
            <span>❤️</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
