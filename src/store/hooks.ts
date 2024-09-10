import { useDispatch , useSelector, type TypedUseSelectorHook } from "react-redux";

import { AppDispatch , RootStat} from "./store";

type DispatchFunction = () => AppDispatch

export const useCartDispatch: DispatchFunction = useDispatch

export const useCatrSelector: TypedUseSelectorHook<RootStat> = useSelector