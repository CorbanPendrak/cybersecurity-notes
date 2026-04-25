#programming 
[[C MOC]]
-- --

# TCP

TCP sockets have ongoing connections normally composed of a server and client.

The library `sys/socket.h` provides socket functionality and `netinet/in.h` provides address family abilities. 

```C
#include <stdio.h> // Input and output
#include <string.h> // String manipulation
#include <sys/socket.h> // Socket functionality
#include <netinet/in.h> // Address family abilities

int main() {
    struct sockaddr_in serv;
    serv.sin_family = AF_INET; // IPv4
    serv.sin_port = htons(8765); // Port number
    serv.sin_addr.s_addr = INADDR_ANY; // Permission to mind to any address

    int sock = socket(AF_INET, SOCK_STREAM, 0);
    connect(sock, (struct sockaddr *)&serv, sizeof(serv));
    // Connnection request
    puts("Messages from server, use 'exit' to return...");

    while(1) { // Runs forever until break
        char strData[255];
        memset(strData, '\0', 255); // Clears previous strData
        recv(sock, strData, sizeof(strData), 0); // Store input
        if (strcmp(strData, "exit\n") == 0) { // Exit case
           puts("Exiting...");
           break;
        }
        printf("%s", strData);
    }
    shutdown(sock, SHUT_RD); // Disallows receiving further bytes

    return 0;
}
```


# HTTP Requests

The `libcurl` library helps with HTTP endpoints.

```C
#include <stdio.h> // Input and Output
#include <curl/curl.h> // HTTP requests

int main(void) {
    CURL *curl;
    CURLcode res;

    curl = curl_easy_init();
    curl_easy_setopt(curl, CURLOPT_URL, "https://sans-foundations.com");
    curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
    res = curl_easy_perform(curl);
    if(res != CURLE_OK) {
        fprintf(stderr, "CURL failure: %s\n", curl_easy_strerror(res));
    }
    curl_easy_cleanup(curl);

    return 0;
}
```