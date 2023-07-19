import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const textState = atom<string>({
  key: "textState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
