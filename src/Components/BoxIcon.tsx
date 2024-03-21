import classNames from "classnames";

function BoxIcon({
  icon,
  backgroundColor,
}: {
  icon: React.ReactNode;
  backgroundColor?: "WHITE" | "GRAY";
}) {
  const bgColor = backgroundColor
    ? backgroundColor == "WHITE"
      ? "bg-white"
      : "bg-[#222222]"
    : "bg-transparent";

  return (
    <div
      className={classNames(
        "w-[30px] h-[30px] rounded-sm flex justify-center items-center",
        bgColor
      )}
    >
      {icon}
    </div>
  );
}

export default BoxIcon;
