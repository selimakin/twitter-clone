import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import React, { SVGProps } from "react";

interface Props {
  // Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  Icon:
    | string
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string })
    | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  ActiveIcon:
    | string
    | (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string })
    | ((props: SVGProps<SVGSVGElement>) => JSX.Element);
  title: string;
}

const SidebarRow = ({ Icon, ActiveIcon, title }: Props) => {
  return (
    <div className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full cursor-pointer group max-w-fit hover:bg-gray-100">
      <Icon className="w-6 h-6" />
      <p className="hidden text-base font-light md:inline-flex lg:text-xl group-hover:text-twitter">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
