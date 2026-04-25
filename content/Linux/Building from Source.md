#linux 
[[Linux Architecture and Components MOC]]
- - -

The process for installing from source varies for the different software, so check documentation. 

# Basic Process

1. Change to source code folder
2. Run `configure` script generating a 'makefile'
3. Compile source code with `make`
4. Install dependencies
5. Go back to step 3 until it compiles completely (Welcome to dependency hell!)
6. Add to PATH with `sudo make install`