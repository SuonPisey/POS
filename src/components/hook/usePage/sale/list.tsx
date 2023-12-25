import { Card, List, Title } from "@tremor/react";
import { useCartStore } from "@/store/useCartStore";
const ListDataItem = () => {
  const { cart, deleteFromCart } = useCartStore();
  return (
    <>
    <p className="mt-1 pt-1">Curren Order </p>
      {/* <Card className="max-w-xs">
    <Title>Tremor's Hometowns</Title>
    <List>
      {cities.map((item) => (
        <ListItem key={item.city}>
          <span>{item.city}</span>
          <span>{item.rating}</span>
        </ListItem>
      ))}
    </List>
  </Card> */}
       <div className="overflow-auto h-[560px] mt-4 "> 
      {cart.items.map((item, idx) => (
        <Card
          className="max-w-full max-h-20 my-5 border-x-0 select-none cursor-pointer "
          key={idx}
          onDoubleClick={() => {
            deleteFromCart(item);
          }}
        >
          <List>
            <Title>{item.name}</Title>
            <div className="flex">
              <p>Qty:{item.qty}</p>
              <p className="mx-auto">Price:{item.price}</p>
              <p>Total:</p>
            </div>
          </List>
        </Card>
        
      ))}
</div>
      {/* <Card className="max-w-full max-h-20 my-5 border-x-0">
        <List>
          <Title>Iphone 12 pro max </Title>
          <div className="flex">
            <p>Qty:</p>
            <p className="mx-auto">Price:</p>
            <p>Total:</p>
          </div>
        </List>
      </Card> */}
    </>
  );
};
export default ListDataItem;
