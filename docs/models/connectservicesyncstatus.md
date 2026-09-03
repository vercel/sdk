# ConnectServiceSyncStatus

done means the external service was updated. required means the Vercel update was saved, but provider-side configuration still needs attention.

## Example Usage

```typescript
import { ConnectServiceSyncStatus } from "@vercel/sdk/models/connectservicesync.js";

let value: ConnectServiceSyncStatus = "required";
```

## Values

```typescript
"done" | "required"
```