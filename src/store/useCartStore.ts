import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

interface CartItem {
    id: string
    name: string
    price: number
    qty: number
    subTotal: number
    categoryId: string
}

interface Cart {
    items: CartItem[]
}

interface CartStore {
    [x: string]: any;
    cart: Cart
    addToCart: (item: CartItem) => void
    removeFromCart: (item: CartItem) => void
    deleteFromCart: (item: CartItem) => void
    clearCart: () => void
    searchCart: (item: CartItem) => void
}

export const useCartStore = create<CartStore>()(
    devtools(
        persist((set, get) => ({
            cart: {
                items: [] as CartItem[], // Fix: Specify the type of items as CartItem[]
            },
            addToCart: (item: CartItem) => {
                const cart = get().cart
                const existingItem = cart.items.find(i => i.id === item.id)
                if (existingItem) {
                    set({
                        cart: {
                            ...cart,
                            items: cart.items.map(i => {
                                if (i.id === item.id) {
                                    return {
                                        ...i,
                                        qty: i.qty + 1,
                                    }
                                }
                                return i
                            })
                        }
                    })
                } else {
                    set({
                        cart: {
                            ...cart,
                            items: [...cart.items, { ...item, qty: 1 }]
                        }
                    })
                }
            },
            removeFromCart: (item: CartItem) => {
                const cart = get().cart
                const existingItem = cart.items.find(i => i.id === item.id)
                if (existingItem) {
                    if (existingItem.qty === 1) {
                        set({
                            cart: {
                                ...cart,
                                items: cart.items.filter(i => i.id !== item.id)
                            }
                        })
                    } else {
                        set({
                            cart: {
                                ...cart,
                                items: cart.items.map(i => {
                                    if (i.id === item.id) {
                                        return {
                                            ...i,
                                            qty: i.qty - 1
                                        }
                                    }
                                    return i
                                })
                            }
                        })
                    }
                }
            },
            deleteFromCart: (item: CartItem) => {
                const cart = get().cart
                set({
                    cart: {
                        ...cart,
                        items: cart.items.filter(i => i.id !== item.id)
                    }
                })
            },
            clearCart: () => {
                set({
                    cart: {
                        items: [],
                    }
                })
            },
            searchCart: (item: CartItem) => {
                const cart = get().cart
                set({
                    cart: {
                        ...cart,
                        items: cart.items.filter(i => i.name === item.name)
                    }
                })
            },
            filterCartbyCategory: (item: CartItem) => {
                const cart = get().cart
                set({
                    cart: {
                        ...cart,
                        items: cart.items.filter(i => i.categoryId === item.categoryId)
                    }
                })
            }
        }), {
            name: 'cart-storage'
        })
    )
)