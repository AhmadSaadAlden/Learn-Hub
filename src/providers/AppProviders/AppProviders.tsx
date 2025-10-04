"use client";
import { ThemeProvider } from "@/hooks/ThemeProvider";
import { DirectionProvider } from "@/lib/i18n/DirectionProvider";
import { store } from "@/lib/redux/store/store";
import { Provider } from "react-redux";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <DirectionProvider>{children}</DirectionProvider>
      </ThemeProvider>
    </Provider>
  );
};
