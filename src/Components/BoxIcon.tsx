import classNames from "classnames";

function BoxIcon({
  icon,
  backgroundColor,
}: {
  icon: React.ReactNode;
  backgroundColor?: string;
}) {
  return (
    <div className={classNames("w-[40px] aspect-square bg-black rounded-sm flex justify-center items-center", "bg-green-600")}>
      {icon}
    </div>
  );
}

export default BoxIcon;
