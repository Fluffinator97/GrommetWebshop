import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = React.createContext<State>(
    {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        handleDetail: () => { },
        addToCart: () => { },
        openModal: () => { },
        closeModal: () => { },
        increment: () => { },
        decrement: () => { },
        removeItem: () => { },
        clearCart: () => { }

    });

interface Props {

}
interface State {
    products: any[],
    detailProduct: {
        id: number;
        title: string;
        img: string;
        price: number;
        company: string;
        info: string;
        inCart: boolean;
        count: number;
        total: number;
    },
    cart: any[],
    modalOpen: boolean,
    modalProduct: {
        id: number;
        title: string;
        img: string;
        price: number;
        company: string;
        info: string;
        inCart: boolean;
        count: number;
        total: number;
    },
    cartSubTotal: number,
    cartTax: number,
    cartTotal: number,
    handleDetail: any,
    addToCart: any,
    openModal: any,
    closeModal: any,
    increment: any,
    decrement: any,
    removeItem: any,
    clearCart: any
}

class ProductProvider extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            products: [],
            detailProduct: detailProduct,
            cart: [],
            modalOpen: false,
            modalProduct: detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart,
            openModal: this.openModal,
            closeModal: this.closeModal,
            increment: this.increment,
            decrement: this.decrement,
            removeItem: this.removeItem,
            clearCart: this.clearCart

        };
    }
    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let products: any[] = [];
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            products = [...products, singleItem];
        });
        this.setState(() => {
            return { products };
        });
    };

    getItem = (id: number) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };
    handleDetail = (id: number) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };
    addToCart = (id: number) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(() => {
            return {
                products: [...tempProducts],
                cart: [...this.state.cart, product],
                detailProduct: { ...product }
            };
        }, this.addTotals);
    };
    openModal = (id: number) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };
    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };
    increment = (id: number) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, this.addTotals);
    };
    decrement = (id: number) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
            return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count - 1;
        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return { cart: [...tempCart] };
            }, this.addTotals);
        }
    };
    getTotals = () => {
        // const subTotal = this.state.cart
        //   .map(item => item.total)
        //   .reduce((acc, curr) => {
        //     acc = acc + curr;
        //     return acc;
        //   }, 0);
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return {
            subTotal,
            tax,
            total
        };
    };
    addTotals = () => {
        const totals = this.getTotals();
        this.setState(
            () => {
                return {
                    cartSubTotal: totals.subTotal,
                    cartTax: totals.tax,
                    cartTotal: totals.total
                };
            },
            () => {
                // console.log(this.state);
            }
        );
    };
    removeItem = (id: number) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        tempCart = tempCart.filter(item => {
            return item.id !== id;
        });

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, this.addTotals);
    };
    clearCart = () => {
        this.setState(
            () => {
                return { cart: [] };
            },
            () => {
                this.setProducts();
                this.addTotals();
            }
        );
    };
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,

                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
