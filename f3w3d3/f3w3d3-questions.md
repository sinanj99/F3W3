## What is the advantage (if any) for a REST-based API of using JWT’s compared to session Cookies
That you don’t need to keep session data on the server in order to authenticate the user. 
RESTful services are supposed to be stateless – JWT does not point to any data stored on the server, but has the data itself, and the JWT gets sent with each request.
## What is the disadvantage (if any) with the implemented JWT-solution
It all relies on one secret key, and if this key is leaked the whole system is compromised.
## What will a client (Single Page WEB, Mobile App, etc.) have to do in order to use this API
Send the token on each request.
## Explain the following
### Why you cannot ever, ever, never store users passwords in plain text (even if you are making a site for your son’s football club)
Since people often use the same passwords for multiple sites.
### Why old hash-algorithms like SHA1 is almost as bad as storing passwords in plain text
easy to 
### Rainbow tables
A rainbow table is a precompiled list of plain text passwords and their corresponding hash.
### bcrypt, and why slow is good
bcrypt is a slow hashing algorhytm, which is good, since it makes bruteforcing a lengthy process
## Does logging out involve the server?
No
## Is the token (if kept somewhere) still valid?
Yes
## Is this a problem?, and if, how could it have been solved?
Yes, if someone gets your token, they can login and identify as you. This can be solved by making an expiration date/time on the token, so that it doesn’t last forever.