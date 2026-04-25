---
tags:
  - "#hardware"
MOC: "[[Hardware MOC]]"
---
-- --

The Central Processing Unit does the majority of processing tasks for the computer.

# Components

## Control Unit

The Control Unit (CU) directs the control for processing instructions

## Arithmetic Logic Unit

The Arithmetic Logic Unit (ALU) performs arithmetic and logic operations. The arithmetic part can carry out addition, subtraction, multiplication, and division. The logic part can check if a value is equal, greater than, or less than another value.

## Registers

The CPU memory registers are faster than RAM, but extremely limited in size. In a 32-bit architecture, each register holds 32 bits; in a 64-bit architecture, each register holds 64 bits.

On a 32-bit Intel CPU (x86) there are four memory registers, `EAX`, `EBX`, `ECX`, and `EDX`, that can be registered in parts. For example, `AX` is the lower half of `EAX` (16/32 bits), `AL` is the lower 8 bits of `AX`, and `AH` is the higher 8 bits of `AX`, with the `A` referring to `EAX`. 

There are 4 other general purpose registers for specific purposes, `ESP`, `EBP`, `ESI`, and `EDI`, which can be split by their lower 16 bits but not further. `ESP` is the Stack Pointer register that contains a memory address to the top of the current stack frame. `EBP` is the Base Pointer that points to the bottom of the current stack frame in RAM. `ESI` is the source index that holds the memory address of data when data is used as a source in an operation. `EDI` is the destination index that holds the destination memory address for a transfer.

# Cycle

The CPU has a fetch, decode, execute cycle.

1. The CU fetches the next instruction from RAM.
2. The CU decodes the instruction and puts it into the ALU
3. The ALU executes the instruction
4. The ALU stores result in memory register or RAM.