import { fakeProducts, Product } from '@/constants/mock-api';
import { notFound } from 'next/navigation';
import ProductForm from './unidade-form';

type TUnidadeViewPageProps = {
  productId: string;
};

export default async function UnidadeViewPage({
  productId
}: TUnidadeViewPageProps) {
  let product = null;
  let pageTitle = 'Criar uma Nova Unidade';

  if (productId !== 'new') {
    const data = await fakeProducts.getProductById(Number(productId));
    product = data.product as Product;
    if (!product) {
      notFound();
    }
    pageTitle = `Edit Product`;
  }

  return <ProductForm initialData={product} pageTitle={pageTitle} />;
}
