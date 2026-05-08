# RecordEventsSource

One of `LOCAL` or `REMOTE`. `LOCAL` specifies that the cache event was from the user's filesystem cache. `REMOTE` specifies that the cache event is from a remote cache.

## Example Usage

```typescript
import { RecordEventsSource } from "@vercel/sdk/models/recordeventsop.js";

let value: RecordEventsSource = "LOCAL";
```

## Values

```typescript
"LOCAL" | "REMOTE"
```