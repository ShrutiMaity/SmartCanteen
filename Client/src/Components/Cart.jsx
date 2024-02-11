import React, { useState } from "react";
import Back from "./Back";

function Cart() {
  var data = [
    {
      name: "Full Lunch",
      imgSrc: "src/assets/Image/FoodCategory/Lunch.png",
      price: "100",
      foodDet: "2 Roti, 2 Sabzi, Rice , Papad ",
      category: "Rice",
    },
    {
      name: "Samosa",
      imgSrc: "src/assets/Image/FoodCategory/Samosa.png",
      price: "100",
      foodDet: "2 pcs",
      category: "Snacks",
    },
    {
      name: "Medu Vada",
      imgSrc: "src/assets/Image/FoodCategory/MeduVada.png",
      price: "130",
      foodDet: "2 pcs",
      category: "Snacks",
    },
  ];

var amt=0
var a=data.map((elem)=>(parseInt( elem.price)))
console.log(a)

for(var i=0;i< a.length;i++){
     amt=amt+a[i];
}

  var [val, updateVal] = useState(1);

  return (
    <div className="login">
      <Back />

      <div className="div">
        <div className="flex jc-sb ai-center gap-12">
          <p className="password-heading">Confirm Order</p>
          <div className="time">
            <p>{"15-20 min"}</p>
          </div>
        </div>

        <div className="orders flex fd-col gap-24">
          {data.map((item, index) => {
            return (
              <div className="orderCard flex jc-sb ai-center key={index}>">
                {/* <div className=" jc-sb flex  ai-center " key={index}> */}
                <div className="flex ai-center gap-8">
                  <img src={item.imgSrc} />
                  <div className="flex fd-col gap-8">
                    <p className="foodName">{item.name}</p>
                    <p className="foodDet">{item.foodDet} </p>
                    <p className="price">
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {item.price}{" "}
                    </p>
                  </div>
                </div>

                <div className="quantity flex jc-sb ai-center gap-12">
                  <i onClick={() => add()} class="bx bx-trash"></i>
                  <p className="unit" type="number">
                    {1}
                  </p>
                  <i onClick={() => updateVal((prev)=>prev+1)} className="add">
                    +
                  </i>
                </div>
              </div>
              //   </div>
            );
          })}
        </div>

        <div className="goToMenu">
          <p>+ Add More Items</p>
        </div>

        <div className="cartFooter">
          <div className="amt flex jc-sb ai-center">
            <p>Total Amount</p>
            <p className="totalAmt">
              <i className="fa-solid fa-indian-rupee-sign"></i>
              {amt}
            </p>
          </div>
          <button className="btn">Confitm Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
