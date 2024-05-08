import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className=" flex items-center justify-center text-6xl w-screen h-screen bg-red-500">
      <h1>Welcome to the Hell</h1>
    </div>
  );
}
