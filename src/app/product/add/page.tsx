import AddProduct from '@/components/product/AddProduct';
import Title from '@/components/title/Tittle';
import * as React from 'react';

interface IAddProductPageProps {
}

const AddProductPage: React.FunctionComponent<IAddProductPageProps> = (props) => {
  return <section>
   <AddProduct />
  </section>;
};

export default AddProductPage;
