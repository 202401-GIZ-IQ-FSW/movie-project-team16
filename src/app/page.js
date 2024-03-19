import Image from "next/image";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <>
    <Nav/>
    {/* <div>test</div> */}
    <div className="la">
    <Card/>

    </div>
    <Footer/>
    </>

  );
}
