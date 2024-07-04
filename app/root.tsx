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
import { Button } from "~/components/ui/button"

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
  return(
    <div className="flex flex-row min-h-screen ">
    <Sidebar/>
    
    <div className="flex-1 bg-[#f6f6f6] dark:bg-[#252525]">
      <Outlet />
    </div>
  </div>
  )
  
}
