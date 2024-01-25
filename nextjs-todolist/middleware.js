import { NextResponse } from "next/server";

export function middleware(request) {
  const cookie = request.cookies.get("accessToken");
  const { pathname } = request.nextUrl;

  if (!cookie && pathname === "/todos") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (cookie && pathname === "/") {
    return NextResponse.redirect(new URL("/todos", request.url));
  }
}

// export const config = {
//   matcher: "/((?!api|static|.*\\..*|_next).*)",
// };
