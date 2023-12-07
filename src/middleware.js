import { NextResponse } from "next/server";
export const config = {
  matcher: "/(dashboard)/:path*",
};
export function middleware(req, ev) {
  // Check if the request has cookies
  if (req.cookies.has("isv_token")) {
    // Continue with the next middleware or return the response
    return NextResponse.next();
  }
  // If there are no cookies, redirect to the login page
  const url = req.nextUrl.clone();
  url.pathname = "/login";
  return NextResponse.redirect(url);
}
