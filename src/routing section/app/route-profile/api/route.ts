//Method 1 - using request parameters
// import { NextRequest } from "next/server";

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));
//   return new Response("Users Profile data!");
// }

//Method 2 - using headless function parameters
import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  const theme = request.cookies.get("theme"); //first way of setting up a cookie
  cookies().set("resultPage", "20"); //second way of setting up a cookie

  console.log(headerList.get("Authorization"));

  console.log(theme); //reading the cookie in first method
  console.log(cookies().get("resultPage")); //reading the cookie in second method

  return new Response("<h2>Users Profile data!</h2>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
