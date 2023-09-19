import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import { NextRequest } from 'next/server'
import type { Database } from '@/utils/database.types'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user && req.nextUrl.pathname === '/login') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  if (!user && req.nextUrl.pathname.startsWith('/c')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (!user && (req.nextUrl.pathname === '/' || req.nextUrl.pathname === '/logout')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res

  // const protectedPaths = [/^\/(account|products)(\/.*)?$/]
  // if (!user && protectedPaths.some((path) => path.test(req.nextUrl.pathname))) {
  //   return NextResponse.redirect(new URL('/login', req.url))
  // } else return res;
}

export const config = {
  matcher: ['/(.*)'],
}