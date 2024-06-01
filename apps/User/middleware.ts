 

import { NextRequest, NextResponse } from "next/server"; 
 

export async  function middleware(req: NextRequest,res: NextResponse){
    const resSession = await fetch(process.env.NEXTAUTH_URL + '/api/auth/session', {
        headers: {
            'Content-Type': 'application/json',
            'Cookie' : req.headers.get('cookie') || '',
        },
        method: 'GET'
    });
    const session = await resSession.json(); 
     
    if(req.nextUrl.pathname.startsWith('/auth')){  
        if(session.user){   
            if (req.nextUrl.pathname.startsWith('/auth/Authtype')){ 
                 if(session.user.Authtype === "GOOGLE" && !session.user.Authenticated){
                    return NextResponse.next(); 
                 } else {
                    return NextResponse.redirect(new URL('/dash/myprofile',req.url))
                 }
            }
            return NextResponse.redirect(new URL('/', req.url));
        }  else {
            if (req.nextUrl.pathname.startsWith('/auth/Authtype')){
                return NextResponse.redirect(new URL('/',req.url))
            }
            return NextResponse.next();
        }
    } 

    if(req.nextUrl.pathname.startsWith('/dash')){  
        if(!session.user){
            return NextResponse.redirect(new URL('/auth/login', req.url));
        } else if(!session.user.Authenticated) {
            return NextResponse.redirect(new URL('/auth/Authtype',req.url));
        }
}
}

export const config = {
    matcher: ['/auth/:path*', '/dash/:path*','/'],  
  };