import React from "react";

interface Props {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const SidebarRow = ({ Icon, title }: Props) => {
  return (
    <div className="group flex items-center space-x-2 px-4 py-3 cursor-pointer rounded-full max-w-fit transition-all duration-200 hover:bg-gray-100">
      <Icon className="h-6 w-6" />
      <p className="hidden text-base font-light md:inline-flex lg:text-xl group-hover:text-twitter">
        {title}
      </p>
    </div>
  );
};

export default SidebarRow;
