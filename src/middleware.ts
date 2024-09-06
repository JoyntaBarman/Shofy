import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware( request: NextRequest) {
    console.log('request', request?.nextUrl?.href);
}

export const config = {
    matcher: '/contact'
} 