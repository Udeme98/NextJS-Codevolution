// export const fetchCache = "default-cache"; route segment configuration
// import { cookies } from "next/headers";

type ProductProp = {
  id: number;
  title: string;
  price: number;
  description: string;
};

const ProductPage = async () => {
  const res = await fetch("http://localhost:3002/products", {
    cache: "no-store", //opts out of caching
  });
  const prod = await res.json();
  //   console.log(prod);

  //   const cookieStore= cookies()
  //   cookieStore.get('theme')

  //const detailsResponse = await fetch('http://localhost:3002/products/1)
  //const details = await detailsResponse.json()

  return (
    <>
      <ul className="space-y-4 p-4">
        {prod.map((product: ProductProp) => {
          return (
            <li
              key={product.id}
              className="p-4 bg-white shadow-md rounded-lg text-gray-700"
            >
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-medium">${product.price}</p>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};
export default ProductPage;
