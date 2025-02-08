import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "coffee",
  
  setTheme: (newTheme) => {
    localStorage.setItem("chat-theme", newTheme);
    set({ theme: newTheme });  // ✅ This triggers a state update
    document.documentElement.setAttribute("data-theme", newTheme); // 🔥 Force theme change immediately
  },
}));
