#internet 
[[Web MOC]]
[[Network MOC]]
- - -

The HTTP protocol is based on requests and responses, consisting of a header and body.

# Requests

- **GET**: Retrieves a specified resource
- **HEAD**: Retrieves only metadata for specified resource, rare
- **POST**: Sends data to web server without response
- **PUT**: Ask web server to store data, rare
- **DELETE**: Deletes specified resource

# Response

The response header contains metadata about the request and the response body contains data.

- **200**: Ok, I will provide you with the answer to this request
- **302**: Found, but redirect
- **404**: File not found
- **500**: Internal server error

| HTTP Code | Meaning               |
| --------- | --------------------- |
| 100       | Continue              |
| 200       | OK                    |
| 202       | Accepted              |
| 301       | Moved Permanently     |
| 302       | Found, but Redirect   |
| 400       | Bad Request           |
| 401       | Unauthorized          |
| 403       | Forbidden             |
| 404       | Not Found             |
| 408       | Request Timeout       |
| 500       | Internal Server Error |
| 502       | Bad Gateway           |
| 503       | Sevice Unavailable    |
| 504       | Gateway Timeout       |

# HTTPS

The HTTPS protocol uses both [[Encryption#Symmetric Encryption|symmetric]] and [[Encryption#Asymmetric Encryption|asymmetric]] encryption. The SSL certificate is used for asymmetric encryption to create a symmetric key for faster encryption.