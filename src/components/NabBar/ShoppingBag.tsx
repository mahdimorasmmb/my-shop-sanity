import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";

interface PropsType {
  count?: number;
}

const defaultProps: PropsType = {
  count: 4,
};

const ShoppingBag: React.FC<PropsType> = ({ count }) => {
  return (
    <div className=" relative cursor-pointer">
      <span className=" absolute -right-1 -top-1 z-30 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-t from-pink-500 to-violet-500 font-bold">
        {count}
      </span>
      <ShoppingBagIcon className="h-6 w-6" />
    </div>
  );
};

ShoppingBag.defaultProps = defaultProps;

export default ShoppingBag;
