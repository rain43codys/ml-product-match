// import dataSource from './../dataSource.json';

import dataSource from './../dataSource.json';
const products = dataSource.products

export default {
	// methods: {
 	  getAllProducts () {
    	return products;
  	},
  	getProduct(key) {
  		return products.find(item => item.key === key)
  	},
  	getProductLookUp(key) {
  		return products.find(item => item.key === key)["lookup"]
  	},
  	getProductImage(key) {
  		// return products.find(item => item.key === key)["image"]
  	}
  // },
}