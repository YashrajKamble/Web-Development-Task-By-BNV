export const ColorSwatch = ({ name, tailwindClass }) => {
  const textClass = "text-black";

  const circleAdditional =
    tailwindClass === "bg-white" ? "border border-gray-300" : "";

  return (
    <div
      role="listitem"
      aria-label={`Color swatch: ${name}`}
      className="flex items-center space-x-2 px-2 py-2 border border-gray-500 rounded-full transition-all duration-300 ease-in-out bg-white"
    >
      <div
        aria-hidden="true"
        className={`h-4 w-4 rounded-full ${tailwindClass} shadow-md flex-shrink-0 ${circleAdditional}`}
      />

      <span
        className={`font-sans text-sm font-semibold whitespace-nowrap ${textClass}`}
      >
        {name}
      </span>
    </div>
  );
};
