#programming 
[[C MOC]]
-- --

# Integers

C has three integer values to avoid wasting memory resources.
- **short**: 2 bytes, max 65,535
- **int**: 4 bytes, max 4,294,967,295
- **long**: 8 bytes, max 18,446,744,073,709,551,615

# Signed vs. Unsigned

An unsigned value has positive numbers only, which allows for a larger max value, but the signed value allows for negative numbers.

# Floating Point Types

## Float

The float type ha 32 bit single-precision floating numbers for 6 decimals of precision. When this precision is overreached, C favors the exponent side.

## Double

The double is a 64-bit type with up to 15 decimal digits.