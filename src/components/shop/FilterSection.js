import React from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { FaCheck } from 'react-icons/fa';
import PriceFormat from '../helper/PriceFormat';

const FilterSection = () => {
   const { updateFilterValue, allProducts,clearFilters, filters: { text, category, color, maxPrice, minPrice, price } } = useFilterContext();

   // get variations from products array
   const getUniqueData = (data, variation) => {
      let variationValues = data.map((curElem, i) => {
         return curElem[variation];
      });

      if (variation === 'color') {
         variationValues = variationValues.flat();
      }

      variationValues = ['all', ...new Set(variationValues)]
      return variationValues;
   }

   // getting filtration variations
   const categoryData = getUniqueData(allProducts, 'category');
   const brandData = getUniqueData(allProducts, 'brand');
   const colorsData = getUniqueData(allProducts, 'color');

   return (
      <div className='filters-variations-wrapper'>

         {/* filter product as per input text*/}
         <div className='filter-search-input'>
            <form onSubmit={(e) => e.preventDefault()}>
               <input type='text' name="text" value={text} onChange={updateFilterValue} placeholder='Search' />
            </form>
         </div>

         {/* filter product as per category */}
         <div className='filter-product-category'>
            <h4>Category</h4>
            {
               categoryData.map((curElem, i) => {
                  return (
                     <button type="button" key={i} data-value={curElem} name='category' value={curElem} onClick={updateFilterValue} className={category === curElem ? 'active' : ''}>{curElem.toLowerCase()}</button>
                  )
               })
            }
         </div>

         {/* filter product as per brand */}
         <div className='filter-product-brand mt-3'>
            <h4>Brand</h4>
            <select name="brand" id="brand" onChange={updateFilterValue}>
               {
                  brandData.map((curElem, i) => {
                     return (
                        <option key={i} value={curElem} name="brand">{curElem.toLowerCase()}</option>
                     )
                  })
               }
            </select>
         </div>

         {/* filter product as per color */}
         <div className='filter-product-colors mt-3'>
            <h4>Colors</h4>
            <div className='product-color-list'>
               {
                  colorsData.map((curElem, index) => {
                     if (curElem === 'all') {
                        return (<button
                           type='button'
                           key={index}
                           name="color"
                           value={curElem}
                           className='color-btn color-all'
                           // style={{ backgroundColor: curElem }}
                           onClick={updateFilterValue}
                        >
                           All
                        </button>)
                     } else {
                        return (<button
                           type='button'
                           key={index}
                           name="color"
                           value={curElem}
                           className={color === curElem ? 'color-btn active' : 'color-btn'}
                           style={{ backgroundColor: curElem }}
                           onClick={updateFilterValue}
                        >
                           {color === curElem ? <FaCheck /> : null}
                        </button>)
                     }

                  })
               }
            </div>
         </div>

         {/* filter product as per price range */}
         <div className='product-filter-price mt-4'>
            <h4> Price </h4>
            <div><span>₹0.00 - </span><PriceFormat price={price}/></div>
            <div className='product-price-range'>
               <input type="range" name="price" min={minPrice} max={maxPrice} value={price} step="5" onChange={updateFilterValue}/>
            </div>
         </div>

         {/* clear products */}
         <div className='product-filter-clear-wrapper mt-4'>
            
            <button className='btn btn-danger' onClick={clearFilters}>Clear Filters</button>
         </div>

      </div>
   )
}

export default FilterSection;