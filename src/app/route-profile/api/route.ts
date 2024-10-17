//Method 1 - using request parameters

// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));
//   return new Response("Users Profile data!");
// }

//Method 2 - using headless function parameters

import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  console.log(headerList.get("Authorization"));
  return new Response("<h2>Users Profile data!</h2>", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
