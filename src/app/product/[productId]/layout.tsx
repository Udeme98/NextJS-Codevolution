import { ReactNode } from "react";

type ProductDetailsLayoutProps = {
  children: ReactNode;
};

const ProductDetailsLayout = ({ children }: ProductDetailsLayoutProps) => {
  return (
    <>
      {children}
      <h2>Features Producs</h2>
    </>
  );
};
export default ProductDetailsLayout;
