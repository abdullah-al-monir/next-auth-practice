import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <p className="text-lime-800 font-semibold text-2xl text-center">
        Welcome!
      </p>
      <div className="text-center my-10">
        <Button size="lg" variant="myType">
          I am the button
        </Button>
      </div>
    </>
  );
}
