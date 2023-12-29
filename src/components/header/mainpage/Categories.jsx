import React from 'react'

const Categories = () => {
    const data=[
        {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName:"Fashion"
        },
        {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Electronic",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Cars",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Home & Garden",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Gifts",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Music",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Health & Beauty",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Pets",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Baby Toys",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Groceries",
          },
          {
            cateImg:"https://t4.ftcdn.net/jpg/03/85/95/63/360_F_385956366_Zih7xDcSLqDxiJRYUfG5ZHNoFCSLMRjm.jpg",
            cateName: "Books",
          },
    ]
  return (
    <>
      <div className="category">
        {
            data.map((value,index)=>{
                return (
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt="" />
                        <span>{value.cateName}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Categories
