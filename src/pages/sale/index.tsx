
import TableProdusctList from "../../components/hook/usePage/sale/table";
import Product, { Item } from "../../components/hook/usePage/sale/product";
import Category from "../../components/hook/usePage/sale/category";
import { useCartStore } from "@/store/useCartStore";
import { TextInput } from "@tremor/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductData: Item[] =
  [
    {
      id: "1",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "2",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "3",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "4",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "5",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "6",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "7",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    },
    {
      id: "8",
      name: "Iphone 12",
      qty: 1,
      price: 1000,
      img: "https://picsum.photos/200/300",
    }
  ];

const SalePage: React.FC = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  
  return (
    <>
      <div className="flex">
        <TextInput placeholder="Search" className="mx-5 my-5" />
        <TextInput placeholder="Customer Name" className="mx-5 my-5" />
        <TextInput placeholder="Sale Rap" className="mx-5 my-5" />
        <TextInput placeholder="Customer" className="mx-5 my-5" />
        <TextInput placeholder="Staff" className="mx-5 my-5" />
      </div>
      <div className="  mx-5  grid grid-cols-2 gap-1  ">
        <div>
          <Category />
          <p className="text-center">Product</p>
          <div className="top-56  grid grid-cols-5 gap-5 h-[700px] px-1 w-full  overflow-y-scroll ">
            {ProductData.map((item, idx) => (
              <Product
                item={item}
                key={`idx-${idx}`}
                onClick={(item) => {
                  addToCart({
                    id: item.id,
                    name: item.name,
                    qty: item.qty,
                    price: item.price,
                  });
                }}
              />
            ))}
          </div>
        </div>
        <TableProdusctList />
        <div className="absolute bottom-0  h-16 w-16 right-2/4 pl-20 pb-60 ">
          <div className="flex">
            <p>SubTotal:</p>
            <p className="pl-48">100$</p>
          </div>
          <div className="flex">
            <p>Discount:</p>
            <p className="pl-48">20%</p>
          </div>
          <div className="flex">
            <p>Total:</p>
            <p className="pl-[222px]">100$</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SalePage;
