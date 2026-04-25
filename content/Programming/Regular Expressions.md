---
tags: 
MOC: "[[index]]"
---
-- --

Regular expressions manipulate text and data. Expressions are comprised of normal text *literals* and special character *metacharacters* that can be escaped to regular characters with *escape characters*. With programs like [[The grep Command|grep]], regex should be put in single quote, `'`, but can be .

# Metacharacters

## Single Character

| Metacharacter | Name                    | Matches                                 |
| ------------- | ----------------------- | --------------------------------------- |
| .             | Dot                     | Any one character                       |
| [...]         | Character Class         | Any character listed in brackets        |
| \[^...]       | Negated Character Class | Any character not listed in brackets    |
| \\char        | Escape character        | Character after slash is used literally |

## Position

| Metacharacter | Name                   | Matches         |
| ------------- | ---------------------- | --------------- |
| ^             | Caret                  | Start of a line |
| $             | Dollar sign            | End of a line   |
| \\<           | Backslash less-than    | Start of a word |
| \\>           | Backslash greater-than | End of a word   |

## Quantifiers

| Metacharacter | Name            | Matches                                |
| ------------- | --------------- | -------------------------------------- |
| ?             | Question mark   | Optional; qualifier                    |
| *             | Asterisk        | Any number including zero of preceding |
| +             | Plus            | One or more of the preceding           |
| {N}           | Match exactly   | Match exactly N times                  |
| {N,}          | Match at least  | Match at least N times                 |
| {min, max}    | Specified range | Match between min and max times        |
## Other

| Metacharacter | Name               | Matches                                                                                   |
| ------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| \|            | Alternation        | Matches either expression                                                                 |
| -             | Dash               | Indicates a range                                                                         |
| (...)         | Parentheses        | Used to limit scope of alternation                                                        |
| \\1, \\2, ... | Backreference      | Matches text previously matched within parentheses                                        |
| \b            | Word boundary      | Batches characters that typically mark the end of a word                                  |
| \\B           | Backslash          | This is an alternative to using "\\\\" to match a backslash for readability               |
| \\w           | Word Character     | Matches any word character (letters, numbers, and underscore)                             |
| \\W           | Non-word character | This matches any character that isn't used in words (not a letter, number, or underscore) |
| \\\`          | Start of buffer    | Matches start of buffer                                                                   |
| \\'           | End of buffer      | Matches end of a buffer                                                                   |
