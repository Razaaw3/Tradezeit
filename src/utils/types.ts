export interface SVG_Icon {
    focused? : boolean,
    color :string
}

export interface BottomSheetScrollHandle {
    handleBottomSheet: () => void;
  }

export interface tradingDataType {
    id: number,
    openTime: string,
    tradeSide: string,
    instrument: string,
    volume: number,
    netPL: string,
}
