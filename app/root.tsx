import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import Sidebar from '~/components/ui/Navigation/sideBar'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  //return <Outlet />;
  return(
    <div className="grid min-h-screen grid-cols-5">
      <Sidebar/>
    <div className="col-span-4 flex-1">
      {/* relative flex flex-col items-center justify-center text-6xl w-full h-screen bg-[#f6f6f6] dark:bg-[#252525] col-span-4 flex-1 */}
      <Outlet />
    </div>
  </div>
  )
  
}
