import {withIronSession} from "next-iron-session"

export function withSession(handler){
    return withIronSession(handler, {
        password: "somelong32charcaterlongpassSomeRandomCharacters",
        cookieName: "CookieCreatedByIronSession",
        cookieOptions : {
            secure:false
        }
    })
}

