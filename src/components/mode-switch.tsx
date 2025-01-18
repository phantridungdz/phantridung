"use client";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="airplane-mode"
        checked={theme == "dark"}
        onCheckedChange={(value) => setTheme(value ? "dark" : "light")}
      />
    </div>
  );
};
