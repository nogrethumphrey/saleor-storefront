import { createContext } from "react";
import { II18nContext } from "./types";

export const I18nContext = createContext<II18nContext>({
  catalogs: {},
  language: "en",
  setLanguage: () => undefined,
});
