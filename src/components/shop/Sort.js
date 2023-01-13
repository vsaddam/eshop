import React from 'react';
import { useFilterContext } from '../../context/FilterContext';
import { BsGrid3X3GapFill, BsListUl } from 'react-icons/bs';



const Sort = () => {
    const { grid_view, filter_products, SetListView, SetGridView, ProductSort } = useFilterContext();
    const ProductCount = filter_products.length;
    return (
        <>
            <div className='product-view-sort'>
                <button className={grid_view ? 'product-grid-view-btn active' : 'product-grid-view-btn'} onClick={SetGridView}><BsGrid3X3GapFill size={25} /></button>
                <button className={!grid_view ? 'product-grid-view-btn active' : 'product-grid-view-btn'} onClick={SetListView}><BsListUl size={25} /></button>
            </div>
            <div className='product-available-count'>
                <p>{ProductCount > 1 ? ProductCount + ' Products Available' : ProductCount + ' Product Available'}</p>
            </div>
            <div className='product-order-sorting' >
                <form action="#">
                    <select name="product-sort-dd" id="product-sort-dd" onChange={ProductSort}>
                        <option value="Price Low To High">Price Low To High</option>
                        <option value="Price High To Low">Price High To Low</option>
                        <option value="Product a - z">Product a - z</option>
                        <option value="Product z - a">Product z - a</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default Sort