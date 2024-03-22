import Image from "next/image";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Card from "./components/card";

export default function Home() {
  return (
    <>
      {/* <div>test</div> */}

      <div className=" la flex flex-col">
        <h1 className="pl-20 pt-12 font-body text-[96px]">Latest Movies</h1>
        <div className="flex justify-center items-center flex-wrap pb-24 pt-12 gap-4 ">
          <Card />

          <Card />

          <Card />

          <Card />

          <Card />
        </div>
      </div>
    </>
  );
}
