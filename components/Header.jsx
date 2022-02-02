import React from "react";
import Link from "next/link";
import { Categories } from ".";

const categories = [
  { name: "Praktikum", slug: "praktikum" },
  { name: "Project", slug: "project" },
];
const Header = () => {
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="border-b w-full inline-block border-blue-500 py-8 	">
        <div className="md:float-left block">
          <Link href="/" passHref>
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog CMS
            </span>
          </Link>
        </div>
        <div className="hidden md:block md:float-right pt-2	">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              passHref
            >
              <span className=" text-white cursor-pointer mt-4 align-middle ml-4 font-semibold">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
