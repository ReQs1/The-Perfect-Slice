import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type YeastType = "fresh" | "instant";

type CalculatorState = {
  numberOfPizzas: number;
  gramsPerBall: number;
  yeastType: YeastType;
};

const initialState: CalculatorState = {
  numberOfPizzas: 10,
  gramsPerBall: 270,
  yeastType: "instant",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    changeNumerOfPizzas: (state, action: PayloadAction<number>) => {
      state.numberOfPizzas = action.payload;
    },
    changeGramsPerBall: (state, action: PayloadAction<number>) => {
      state.gramsPerBall = action.payload;
    },
    changeYeastType: (state, action: PayloadAction<YeastType>) => {
      state.yeastType = action.payload;
    },
  },
});

export const { changeNumerOfPizzas, changeGramsPerBall, changeYeastType } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
