# Cookie

1. 为什么需要cookie
2. HTTP:  无状态协议，上下文无关
3. 通过服务器设置， 浏览器存储
4. Cookie 特点
   *  不可跨域
   *  有数量和大小的限制： 50个， 4kb
   *  存储时间灵活
   *  客户端也可以设置


## Cookie Attributes

1. name：uniqueness
2. value: Cookie value
3. domain: Set the domain in which the cookie is valid
4. path: Cookie path
5. expires: Cookie expires time in GMT or UTC
6. max-age: period of validity
7. HttpOnly: Front-end not available
8. Secure: Set cookies to be transmitted only over HTTPS
9. SameSite: The cross-domain request cannot be sent

## Set Cookie

``` javascript

document.cookie =`name=liansek; value=lpf123456;domain=.bilibili.com;expires=${new Date(2024, 06, 01)};max-age=100;SameSite=None;` 


```