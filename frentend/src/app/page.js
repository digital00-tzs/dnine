import Image from "next/image";
// import Header from "@/components/Header/index";
// import Footer from "@/components/Footer/index";
import HomePages from "./Homepages/page";

export default function Home() {
  return (
    <div >
      {/* Header Component */}
 

      {/* Main Content */}
      <main className="flex-grow">
        {/* Add your main content here */}
       <HomePages/>
       
      </main>

      {/* Footer Component */}
      
    </div>
  );
}
