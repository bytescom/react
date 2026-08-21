/**
 * Redux - state management hook
 * Mainly - store, slice, reduces, action 
 */

import { Provider } from "react-redux";
import ReduxCounter from "./ReduxCounter";
import { store } from "./store";

// Step 2 - create a slice/feature
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: 0,
//     reducers: {
//         incre: (prev, action) => {
//             return prev + 1;
//         },
//         decre: (prev, action) => {
//             return prev - 1;
//         },
//         reset: (prev, action) => {
//             return 0;
//         }
//     },
// });

// export const { incre, decre, reset } = counterSlice.actions;


// Step 1 - Create a store
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// })

const Redux = () => {
    return (
        <div>
            <h2>learn Redux</h2>

            <Provider store={store}>
                <ReduxCounter />
            </Provider>
        </div>
    )
}

export default Redux