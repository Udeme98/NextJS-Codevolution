import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  //   Using middleware with cookies
  const themePreference = request.cookies.get("theme");
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }

  //   Using middleware with headers
  response.headers.set("custom-header", "custom-value");

  return response;
  // using custom matcher config
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  //   using conditional statements
  //   if (request.nextUrl.pathname === "/profile") {
  //     return NextResponse.redirect(new URL("/hello", request.url));
  //   }
}

// export const config = {
//   matcher: "/profile",