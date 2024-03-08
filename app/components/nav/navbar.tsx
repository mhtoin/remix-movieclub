import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="w-screen border-b p-2 flex justify-center">
      <nav className="flex w-2/3 justify-between items-center p-4">
        <div>
          <h1 className="text-2xl font-bold">leffaseura</h1>
        </div>
        <div>
          <Button variant={"ghost"}>Login</Button>
        </div>
      </nav>
    </div>
  );
}
