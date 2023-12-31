"use client";
import useThemeContext from "../hooks/useThemeContext";
import FormModalButton from "../ui/FormModalButton";

export default function Header() {
  const { theme } = useThemeContext();
  return (
    <div
      className={` ${
        theme ? "bg-[#1c1c1c]" : "fff"
      } rounded-lg shadow-xl p-5 max-w-3xl mx-auto flex flex-col items-center justify-center gap-8 themeTransitionColor`}
    >
      <h1
        className={`${
          theme ? "text-white " : "text-black"
        }text-3xl font-semibold text-center custom-sm:text-base themeTransitionColor`}
      >
        Keep track of all your to-dos effortlessly.
      </h1>
      <FormModalButton />
    </div>
  );
}
