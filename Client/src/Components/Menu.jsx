import React from "react";

function Menu() {
  var category = [
    { name: "All", imgSrc: "src/assets/Image/FoodCategory/All.png" },
    { name: "Drinks", imgSrc: "src/assets/Image/FoodCategory/Drinks.png" },
    { name: "Lunch", imgSrc: "src/assets/Image/FoodCategory/Rice.png" },
    { name: "Snacks", imgSrc: "src/assets/Image/FoodCategory/Rolls.png" },
  ];

  // var data=[{
  //     Drinks:[{
  //         name:"Tea",
  //         imgSrc:"src/assets/Image/FoodCategory/Tea.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Coffee",
  //         imgSrc:"src/assets/Image/FoodCategory/Tea.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Milk",
  //         imgSrc:"src/assets/Image/FoodCategory/Tea.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Juice",
  //         imgSrc:"src/assets/Image/FoodCategory/Tea.png",
  //         price:"100"
  //     },
  //     {
  //         name:"coke",
  //         imgSrc:"src/assets/Image/FoodCategory/Tea.png",
  //         price:"100"
  //     }]
  // },
  // {
  //     Rice:[{
  //         name:"Fried Rice",
  //         imgSrc:"src/assets/Image/FoodCategory/Lunch.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Veg Pulao",
  //         imgSrc:"src/assets/Image/FoodCategory/Lunch.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Full Lunch",
  //         imgSrc:"src/assets/Image/FoodCategory/Lunch.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Half Lunch",
  //         imgSrc:"src/assets/Image/FoodCategory/Lunch.png",
  //         price:"100"
  //     }]
  // },
  // {
  //     Snacks:[{
  //         name:"Bread",
  //         imgSrc:"src/assets/Image/FoodCategory/Sandwich.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Pizza",
  //         imgSrc:"src/assets/Image/FoodCategory/Sandwich.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Ice Cream",
  //         imgSrc:"src/assets/Image/FoodCategory/MeduVada.png",
  //         price:"100"
  //     },
  //     {
  //         name:"Ice Cream",
  //         imgSrc:"src/assets/Image/FoodCategory/Samosa.png",
  //         price:"100"
  //     }]
  // }];

  var data = [
    {
      name: "Full Lunch",
      imgSrc: "src/assets/Image/FoodCategory/Lunch.png",
      price: "100",
      category: "Rice",
    },
    {
      name: "Samosa",
      imgSrc: "src/assets/Image/FoodCategory/Samosa.png",
      price: "100",
      category: "Snacks",
    },
    {
      name: "Medu Vada",
      imgSrc: "src/assets/Image/FoodCategory/MeduVada.png",
      price: "100",
      category: "Snacks",
    },
    {
      name: "Tea",
      imgSrc: "src/assets/Image/FoodCategory/Tea.png",
      price: "100",
      category: "Drinks",
    },
    {
      name: "Sandwich",
      imgSrc: "src/assets/Image/FoodCategory/Lunch.png",
      price: "100",
      category: "Snacks",
    },
    {
      name: "Coffee",
      imgSrc: "src/assets/Image/FoodCategory/Tea.png",
      price: "100",
      category: "Drinks",
    },
    {
      name: "Milk",
      imgSrc: "src/assets/Image/FoodCategory/Tea.png",
      price: "100",
      category: "Drinks",
    },
    
    {
      name: "coke",
      imgSrc: "src/assets/Image/FoodCategory/Tea.png",
      price: "100",
      category: "Drinks",
    },
    {
      name: "Fried Rice",
      imgSrc: "src/assets/Image/FoodCategory/Lunch.png",
      price: "100",
      category: "Rice",
    },
    {
      name: "Veg Pulao",
      imgSrc: "src/assets/Image/FoodCategory/Lunch.png",
      price: "100",
      category: "Rice",
    },
    
    {
      name: "Juice",
      imgSrc: "src/assets/Image/FoodCategory/Tea.png",
      price: "100",
      category: "Drinks",
    },
  ];

  return (
    <div className="menu">
      <div className="category flex fd-col">
        <p className="category-Head">Categories</p>
        <div className="categoryList flex">
          {category.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.imgSrc} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="category-Head">Bestseller</p>
        <div className="flex fw-w food gap-16">
          {data.map((item, index) => {
            return (
              <div className="productCard" key={index}>
                <div>
                <img src={item.imgSrc} />
                </div>
                

                <div className="productDet flex fd-col gap-8">
                  <p className="foodName">{item.name}</p>

                  <div className="flex flex jc-sb">
                    <p className="categoryName">{item.category}</p>
                    <p className="price ">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {item.price}
                    </p>
                  </div>

                  <button className="">
                    <div className="flex jc-sb">
                      <p>Add</p>
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
