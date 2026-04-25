#network 
[[Network MOC]]
- - -

The Transmission Control Protocol focuses on reliability and is common for most tasks. Setup requires a handshake and can retransmit data. The downside of TCP is its slow transmission compared to the [[UDP Protocol]]. 

# Handshake

1. Computer A sends packet with the synchronize flag (`SYN`) to computer B with a randomly generated sequence number.
2. Computer B replies with synchronize flag (`SYN`) and acknowledge flag (`ACK`) containing another random number and the acknowledgement number, which is the sequence number of Computer A incremented by 1.
3. Computer A responds with just the acknowledge flag (`ACK`) and their acknowledgment number.

```mermaid
sequenceDiagram
	participant A as Computer A
	participant B as Computer B
	A->>B: [SYN] Seq=5 Len=0
	B-->>A: [SYN ACK] Seq=3 Ack=6 Len=0
	A->>B: [ACK] Seq=6 Ack=4 Len=0
```

# Transmission

Unlike the handshake and teardown, data is sent with the `Len` showing length of data and the next acknowledge number is the previous `Len` + 1.

```mermaid
sequenceDiagram
	participant A as Computer A
	participant B as Computer B
	A->>B: [PSH, ACK] Seq=5 Ack=2 Len=12 [Data = Hello World]
	B-->>A: [ACK] Seq=2 Ack=13 Len=0
```

# Teardown

1. Computer A sends a finish packet (`FIN`) with current sequence number. The `ACK` is to acknowledge the previous package.
2. Computer B responds with `ACK` with acknowledgment number as Computer A's sequence number incremented by 1.
3. Computer B sends a `FIN` + `ACK` with same acknowledgment number.
4. Computer A sends a `ACK` packet with acknowledgment number as Computer B's sequence number incremented by 1.

```mermaid
sequenceDiagram
	participant A as Computer A
	participant B as Computer B
	A->>B: [FIN, ACK] Seq=13 Ack=1 Len=0
	B-->>A: [ACK] Seq=1 Ack=14 Len=0
	B-->>A: [FIN, ACK] Seq=1 Ack=14 Len=0
	A->>B: [ACK] Seq=14 Ack=2 Len=0
```