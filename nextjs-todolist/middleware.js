import { NextResponse } from "next/server";

const protectedRoutes = ["/todos"];

export default function middleware(req) {
  const user = req.cookies.get("accessToken");
  const url = req.url;
  if (!user && url.includes("/todos")) {
    return NextResponse.redirect(new URL("/", url));
  }

  if (user && url === "/todos") {
    return NextResponse.redirect(new URL("/todos", url));
  }
}
