import Image from "next/image";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      <Nav />
      {/* <div>test</div> */}
      <div className=" la flex justify-start items-center flex-wrap  h-screen">
        <div className=" mx-4 my-8">
          <Card />
        </div>
        <div className=" mx-4 my-8">
          <Card />
        </div>
        <div className=" mx-4 my-8">
          <Card />
        </div>
        <div className=" mx-4 my-8">
          <Card />
        </div>
        <div className=" mx-4 my-8">
          <Card />
        </div>
      </div>
      <Footer />
      <div className="blob"></div>
      <div className="blob1"></div>
    </>
  );
}
