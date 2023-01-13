import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import { useFilterContext } from '../../context/FilterContext';

const ProductList = () => {
   const { filter_products, grid_view } = useFilterContext();

   switch (grid_view) {
      case true:
         return <GridView products={filter_products} />
      case false:
         return <ListView products={filter_products} />
   }
}

export default ProductList