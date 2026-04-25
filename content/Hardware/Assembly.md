---
tags:
  - hardware
  - programming
MOC: "[[Hardware MOC]]"
---
-- --

Assembly language is a low-level programming language that sends instructions to the [[CPU]] directly.

# Compiling

After writing the assembly code, it needs to be assembled and linked. Using `nasm` is `{shell icon}nasm -f elf output.asm` producing the object file `output.o`. To create the executable use `{shell icon}ld -m elf_i386 output.o -o output` to create the executable `output`. 

Assemblers convert the assembly code in a text file into binary numbers or turn symbols into memory addresses, like functions, for an object file.

Linkers covert the object file into a binary file and convert external references, like libraries.

# Syntax

There are two common forms of assembly syntax depending on the assembler.

## Intel

```arm-asm
mov edx, 13 ; String length
start MOV 
```
## AT&T

```Armasm
mov 13, %edx // String length
```


# Structure

```arm-asm
SECTION .data
message     db      'Hello World!', 0Ah
 
SECTION .text
global  _start
 
_start:
 
    mov     edx, 13         ; String length
    mov     ecx, message    ; String to be written
    mov     ebx, 1          ; File descriptor to write to (stdout)
    mov     eax, 4          ; System call number (sys_write)
    int     80h             ; System call: sys_write(13, message, stdout);
 
    mov     ebx, 0          ; return 0 (no errors)
    mov     eax, 1          ; System call number (sys_exit)
    int     80h             ; System call: sys_exit(0);
```

The `.data` section stores variables, in this case `message`. The `db` stands for defined byte, with each character a single byte. The `, 0Ah` means to append the hex code for a Unix newline. 

The `.text` section stores the code. `_start` is a code label for jumping around the code and `global _start` tells the assembler to start code at the `_start` label.

# Syscall

A syscall is used to interface with the kernel, which interfaces with the hardware. The instruction is `int 80h` and the effect changes on the registers.


| sys       | eax  | ebx             | ecx                        | edx          | esi | edi | definition          |
| --------- | ---- | --------------- | -------------------------- | ------------ | --- | --- | ------------------- |
| sys_exit  | 0x01 | int error_code  | -                          | -            | -   | -   | kernel/exit.c:935   |
| sys_write | 0x04 | unsigned int fd | const char \_\_user \*buff | size_t count | -   | -   | fs/read_write.c:581 |

# Commands
## mov

The `mov` mnemonic moves data from the source to the destination. 

```armasm
mov edx, 13 ; Move number 13 into edx register
mov eax, edx ; Move edx register into eax register
```

## push & pop

The `push` and `pop` mnemonics push and pop data on the stack, a first-in, last-out structure (FILO).

```armasm
push 1 ; Stack: 1
push 2 ; Stack: 1, 2
pop eax ; eax is 2
pop edx ; edx is 1 and stack is empty
```

## add & sub

The `add` and `sub` do simple addition and subtraction.

```armasm
mov eax, 0x0 ; Set eax to 0
add eax, 0x1 ; Add 1 to value in eax
mov ebx, 0x2 ; Set ebx to 2
add eax, ebx ; Add ebx (2) to the value in eax
```

## mul & div

The `mul` and `div` do simple multiplication and division. These two always use the `eax` register as the source and output, and so only take one input.

```armasm
mov eax, 0x4 ; Set eax to 4
mov ebx, 0x2 ; Set ebx to 2
mul ebx      ; Multiply eax (4) and ebx (2)
div ebx      ; Divide eax (8) by ebx (2) 
```

## Labels and jmp

`jmp` jumps the execution to a label, which is essential for loops.

`je` and `jne` require a `cmp`, compare, of two items

| Mnemonic | Case              |
| -------- | ----------------- |
| jmp      | Jump              |
| je       | Jump if equal     |
| jne      | Jump if not equal |
| jz       | Jump if zero      |
| jnz      | Jump if not zero  |
```armasm
SECTION .data
message     db      'Hello World!', 0Ah
secret      db      'Secret MSG!',  0Ah
 
SECTION .text
global  _start
 
_start:
    mov     eax, 5
 
loop:
	cmp     eax, 2
	je      extra
    push    eax
    mov     edx, 13         ; String length
    mov     ecx, message    ; String to be written
    mov     ebx, 1          ; File descriptor to write to (stdout)
    mov     eax, 4          ; System call number (sys_write)
    int     80h             ; System call: sys_write(13, message, stdout);

    pop     eax
    sub     eax, 1
    jnz     loop
 
    mov     ebx, 0          ; return 0 (no errors)
    mov     eax, 1          ; System call number (sys_exit)
    int     80h             ; System call: sys_exit(0);

extra:
	push    eax
	mov     edx, 12
	mov     ecx, secret
	mov     ebx, 1
	mov     eax, 4
	int     80h
	pop eax
	jmp loop 
```

## Functions

Functions need a label and end with `ret`. The stack needs to be adjusted before and reverted after the function is called. Instead of using `jmp`, `call` is used for functions

```armasm
; Typical function setup
push edp
mov ebp esp
sub esp, 0
; Function teardown
mov esp, ebp
pop ebp
ret
```


# AArch64
ARM 64
```armasm
; Fibonaci recursive function
start:
  stp x29, x30, [sp, #-0x30]!
  mov x29, sp
  cmp x0, #1
  b.le final
  sub x0, x0, #1
  str x0, [sp, #-8]!
  bl start
  ldr x1, [sp], #8
  str x0, [sp, #-8]!
  sub x0, x1, #1
  bl start
  ldr x1, [sp], #8
  add x0, x0, x1
final:
  ldp x29, x30, [sp], #0x30
  ret   
```