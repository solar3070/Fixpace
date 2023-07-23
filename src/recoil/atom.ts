import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const correctTextState = atom<string[]>({
  key: "correctTextState",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
