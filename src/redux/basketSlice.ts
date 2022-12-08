import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "./store";
export interface BasketState {
    items: Product[]
}

const initialState: BasketState = {
    items: []
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket: (
            state: BasketState,
            action: PayloadAction<{ id: string }>
        ) => {
            const index = state.items.findIndex(
                (item: Product) => item._id === action.payload.id
            )

            const newBasket: Product[] = [...state.items]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.log("Can not Remove product");
            }

            state.items = newBasket;
        }
    }
})

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItem = (state: RootState) => state.basket.items
export const selectBasketItemsWithId = (state: RootState, id: string) => {
    state.basket.items.filter((item: Product) => item._id === id)
}
export const selectBasketTotal = (state: RootState) => {
    state.basket.items.reduce((total: number, item: Product) => (total += item.price), 0)
}
export default basketSlice.reducer