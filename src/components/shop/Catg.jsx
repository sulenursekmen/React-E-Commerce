import React from 'react'

export const Catg = () => {
  const data = [
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/152/152752.png",
      cateName: "Apple",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-256/free-samsung-1-282297.png",
      cateName: "Samsung",
    },
    {
      cateImg: "https://cdn.iconscout.com/icon/free/png-256/free-huawei-226443.png?f=webp",
      cateName: "Huawei",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/882/882745.png",
      cateName: "Oppo",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/882/882813.png",
      cateName: "Vivo",
    },
    {
      cateImg: "https://w7.pngwing.com/pngs/760/905/png-transparent-xiaomi-redmi-2-computer-icons-smartphone-smartphone-angle-electronics-text.png",
      cateName: "Xiaomi",
    },
    {
      cateImg: "https://cdn-icons-png.flaticon.com/512/5969/5969151.png",
      cateName: "Sony",
    },

  ]
  return (
   <>
    <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
   </>
  )
}
