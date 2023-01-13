const FilterReducer = (state, action) => {

    switch (action.type) {

        case 'LOAD_PRODUCT_DATA':
            // first way to identify max price using reduce().
            let priceArr = action.payload.map((curElem, index) => curElem.price);
            let maxPrice = priceArr.reduce((initialValue, curElem) => Math.max(initialValue, curElem), 0);
        
            // second way using rest operator.
            // third way is apply() method.

            return {
                ...state,
                "filter_products": [...action.payload],
                "allProducts": [...action.payload],
                'filters': { ...state.filters, maxPrice, 'price': maxPrice }
            }
        case 'SET_GRID_VIEW':
            return {
                ...state,
                'grid_view': true,
            }
        case 'SET_LIST_VIEW':
            return {
                ...state,
                'grid_view': false,
            }
        case 'FILTER_VALUE_UPDATE':
            const { name, value } = action.payload;

            return {
                ...state,
                'filters': {
                    ...state.filters,
                    [name]: value
                }
            }
        case 'SET_SORT_VALUE':
            return {
                ...state,
                'sort_value': action.payload,
            }

        case 'SET_PRODUCT_SORT':
            let newFIlterProduct;
            const { filter_products, sort_value } = state;
            let tempProduct = [...filter_products];
            const setProductFilter = (a, b) => {

                if (sort_value === 'Price Low To High') {
                    return a.price - b.price;
                }

                if (sort_value === 'Price High To Low') {
                    return b.price - a.price;
                }

                if (sort_value === 'Product a - z') {
                    return a.title.localeCompare(b.title);
                }

                if (sort_value === 'Product z - a') {
                    return b.title.localeCompare(a.title);
                }
            }

            newFIlterProduct = tempProduct.sort(setProductFilter);

            return {
                ...state,
                'filter_products': newFIlterProduct,
            }

        case 'SET_PRODUCT_FILTER':
            const { allProducts } = state;
            let tempAllProducts = [...allProducts];
            let { text, category, brand, color, price } = state.filters;

            if (text) {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.title.toLowerCase().includes(text);
                });
            }

            if (category !== 'all') {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.category === category;
                });
            }

            if (brand !== 'all') {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.brand.toLowerCase() === brand.toLowerCase();
                });
            }

            if (color !== 'all') {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.color.includes(color);
                });
            }

            if (price == 0) {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.price == price;
                });
            } else {
                tempAllProducts = tempAllProducts.filter((curElem) => {
                    return curElem.price <= price;
                });
            }

            return {
                ...state,
                'filter_products': tempAllProducts,
            }
        case 'CLEAR_FILTERS':
            return {
                ...state,
                filters:{
                    ...state.filters,
                    'text': '',
                    'category': 'all',
                    'brand': 'all',
                    'color': 'all',
                    'maxPrice' : state.filters.maxPrice,
                    'minPrice' : 0,
                    'price' : state.filters.maxPrice
                }
            }
        default:
            return state
    }
}

export default FilterReducer;