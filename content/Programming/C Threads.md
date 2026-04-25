#programming 
[[C MOC]]
-- --

For processor-intensive programs, multithreading can run tasks concurrently.

A thread is an independent stream of instructions with a shared resource space for communications and data usage between threads, unlike processes, which run independently. Threads run in a group in parallel, not like forking.

```C
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

void *outputMsg()
{
    sleep(1);
    puts("Hello from the thread!");
    return NULL;
}

int main()
{
    pthread_t threadId; // Given integer value of id
    printf("Starting thread id: %ld\n", threadId);
    
    pthread_create(&threadId, NULL, outputMsg, NULL);
    // Creates the new thread with no attributes on
	// function outputMsg with no attributes
	
    pthread_join(threadId, NULL);
    // Join thread to main thread
    
    sleep(1);
    printf("Exiting...\n");
    return 0;
}
```

# Mutexes

A mutex helps solve race conditions with threads by setting a lock on some shared resource that can only be unlocked by that thread. 

This is necessary for threads that need to happen in one at a time. A mutex is not needed for threads trying to crack a hash,  

```C
#include <stdio.h>
#include <unistd.h>
#include <pthread.h>

pthread_t threadId[5]; // Allows for 5 threads
pthread_mutex_t lock;
int counter = 0;

void* outputMsg(void *arg) {
    pthread_mutex_lock(&lock); // Locks code
    printf("Task %d start\n", ++counter);
    sleep(1);
    printf("Task %d finish\n\n", counter);
    pthread_mutex_unlock(&lock); // Unlocks code
    return NULL;
}

int main() {
    pthread_mutex_init(&lock, NULL); // Initialize lock

    for (int i = 0; i < 5; i++) {
        pthread_create(&(threadId[i]), NULL, outputMsg, NULL);
    } // Create 5 threads

    for (int i = 0; i < 5; i++) {
        pthread_join(threadId[i], NULL);
    } // Join 5 threads to main process

    pthread_mutex_destroy(&lock); // Remove lock

    return 0;
}
```

