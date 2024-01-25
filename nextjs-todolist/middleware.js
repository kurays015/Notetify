import { NextResponse } from "next/server";

const protectedRoutes = ["/todos"];

export default function middleware(req) {
  const token = req.cookies.get("accessToken");
  if (!token && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
