import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { SVGProps } from "react";

interface Props {
  Icon:
    | string
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string })
    | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  title: string;
  index: number;
  isActive: boolean;
  onClick: (index: number) => void;
}

const SidebarRow = ({ Icon, title, index, isActive, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick(index)}
      className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full cursor-pointer group max-w-fit hover:bg-gray-100"
    >
      <Icon className="w-6 h-6" />
      <p
        className={`hidden text-base md:inline-flex lg:text-xl group-hover:text-twitter ${
          isActive ? "font-semibold" : "font-light"
        }`}
      >
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
