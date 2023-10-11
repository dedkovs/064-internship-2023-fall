export enum CounterColor {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

export type CounterState = {
  value: number;
  color: CounterColor;
};

export type CounterIncrementAction = { type: string; payload: number };

export type CounterChangeColorAction = { type: string; payload: CounterColor };
