---
tags:
  - hardware
MOC: "[[Hardware MOC]]"
---
-- --

The Random Access Memory (RAM) is separated into sections by software.

# The Stack

The stack is structured and ordered memory. Each function in a program is assigned an area of memory called a stack frame containing local variables. At the bottom of the stack is the return pointer which is the previous value of `EIP`.

# The Heap

The heap is unstructured memory whose size can be expanded, but is slower to access than the stack. 