"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center justify-center gap-x-2 w-full">
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FcGoogle className="size-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline" onClick={() => {}}>
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};

export default Social;
