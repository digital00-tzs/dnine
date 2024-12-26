import React from "react";
import Shoesbanner from "./Shoesbanner";
import Shoesbanner2 from "./Shoesbanner2";
import ShoesMain from "./ShoesMain";
import Breadcrumb from "./Breadcrumb"; // Import the Breadcrumb component


export default function page() {
  const breadcrumbPaths = [
    { name: "Home", link: "/" },
    { name: "All Products", link: "/products" },
    { name: "Shoes", link: "/products/shoes" },
  ];
  return (
    <div >
     <Shoesbanner/>
     <Breadcrumb paths={breadcrumbPaths} className='p-4' />
     <main className="px-6">
     <ShoesMain/>
     </main>
     <Shoesbanner2/>
    </div>
  );
}
