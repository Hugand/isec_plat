import * as Cookies from 'js-cookie'

const TOKEN = "token"

export const setSessionCookie = (session) => {
    Cookies.remove(TOKEN)
    Cookies.set(TOKEN, session, {expires: 3600})
}

export const getSessionCookie = () => {
    const sessionCookie = Cookies.get(TOKEN)
    if(sessionCookie === undefined)
        return {}
    else
        return sessionCookie
}

export const deleteSessionCookie = () => {
    Cookies.remove(TOKEN)
}

export const isSessionCookieSet = () => {
    const sessionCookie = Cookies.get(TOKEN)
    return !(sessionCookie === undefined)
}