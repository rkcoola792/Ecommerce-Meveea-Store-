import Card from '../card/Card';;
import React from 'react'

const List = ({maxPrice,categoryId,sort}) => {
    const data = [
      {
        id: 1,
        img1: "/vertical/2.jpg",
        img2: "/vertical/a.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
      },
      {
        id: 2,
        img1: "/vertical/3.jpg",
        img2: "/vertical/4.jpg",
        title: "Coat",
        isNew: false,
        oldPrice: "$25",
        newPrice: "$20",
      },
      {
        id: 3,
        img1: "/vertical/5.jpg",
        img2: "/vertical/6.jpg",
        title: "Formals",
        isNew: true,
        oldPrice: "$30",
        newPrice: "$27",
      },
      {
        id: 4,
        img1: "/vertical/7.jpg",
        img2: "/vertical/8.jpg",
        title: "Pants",
        isNew: false,
        oldPrice: "$6",
        newPrice: "$5",
      },
      {
        id: 5,
        img1: "/vertical/9.jpg",
        img2: "/vertical/10.jpg",
        title: "Overcoat",
        isNew: true,
        oldPrice: "$24",
        newPrice: "$20",
      },
      {
        id: 6,
        img1: "/vertical/11.jpg",
        img2: "/vertical/12.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
      },
      {
        id: 1,
        img1: "/vertical/2.jpg",
        img2: "/vertical/a.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
      },
      {
        id: 1,
        img1: "/vertical/2.jpg",
        img2: "/vertical/a.jpg",
        title: "Long sleeve",
        isNew: true,
        oldPrice: "$15",
        newPrice: "$12",
      },
    ];
    console.log("asda")
  return (
    <div className='list flex flex-wrap gap-8 mt-8 '>
      {data.map(ele=><Card data={ele} key={data.id}></Card>)}
    </div>
  )
}

export default List
