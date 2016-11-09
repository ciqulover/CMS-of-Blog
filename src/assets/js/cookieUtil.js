
function get(name){
    let cookieName = encodeURIComponent(name) + '=',
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null,
        cookieEnd=null

    if (cookieStart > -1) {
        cookieEnd = document.cookie.indexOf(';', cookieStart)
        if (cookieEnd == -1)cookieEnd = document.cookie.length
    }
    cookieValue = decodeURIComponent(document.cookie.substr(cookieStart
        + cookieName.length, cookieEnd))
    return cookieValue
}
function set(name, value, expires, path, domain, secure){
    let cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value)
    if (expires instanceof Date)
        cookieText += "; expires=" + expires.toGMTString()
    if (path) cookieText += "; path=" + path
    if (domain) cookieText += "; domain=" + domain
    if (secure) cookieText += "; secure"
    document.cookie = cookieText
}

function unset(name, path, domain, secure) {
    set(name, '', new Date(0), path, domain, secure);
}

export {
    get,set,unset
}