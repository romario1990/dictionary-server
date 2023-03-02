import { OxfordDictionaryProps } from "./HomeProps";

type initialStateProps = {
  word: string;
  error: string | undefined;
  definitions: OxfordDictionaryProps | undefined;
  loading: boolean;
};

const initialState: initialStateProps = {
  word: "",
  error: undefined,
  definitions: undefined,
  loading: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "SET_INITIAL_DATA":
      return { ...initialState };
    case "SET_WORD":
      return { ...state, word: action.payload.data.word, loading: false };
    case "SET_DEFINITIONS":
      return { ...state, definitions: action.payload.data.definitions, error: undefined, loading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload.data.error, definitions: undefined, loading: false };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}
export { reducer, initialState };
