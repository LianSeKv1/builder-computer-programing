/**
 *  1. name：uniqueness
    2. value: Cookie value
    3. domain: Set the domain in which the cookie is valid
    4. path: Cookie path
    5. expires: Cookie expires time in GMT or UTC
    6. max-age: period of validity
    7. HttpOnly: Front-end not available
    8. Secure: Set cookies to be transmitted only over HTTPS
    9. SameSite: The cross-domain request cannot be sent
 */

const manageCookie = {
    set: function(name, value, attr) {
        const _cookie = `${name}=${value};`
        const _attr = Object.entries(attr)
        .map(item => `${item[0]}=${item[1]}`)
        .join(';')
        document.cookie = _cookie.concat(_attr)
    },
    get: function(name) {
        name = ' ' + name;
        const target = document.cookie.split(';').map(item => item.split('=')).find(item => item[0] === name)
        return target? target[1] : null
    },
    remove: function(name)  {
        this.set(name, '', {
            'max-age': 0,
        })
    }
}

manageCookie.set('liansek', 'lpf123456', {
    domain: '.bilibili.com',
    expires: new Date(2024, 6, 1),
    maxAge: 100,
    path: 'all',
    HttpOnly: true,
    Secure: true,
    SameSite: 'Strict'
})