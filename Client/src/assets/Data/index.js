async function getData() {
  const response = await fetch("order.json");
  const data = await response.json();
  console.log("Order Id : ", data.order.orderId);
  var items = data.order.orderitems;
  for (i in items) {
    console.log(`${items[i].quantity} x ${i} ${items[i].Total}`);
  }





}
getData();

