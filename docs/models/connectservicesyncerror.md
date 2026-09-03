# ConnectServiceSyncError

Provider synchronization errors, when synchronization is required.

## Example Usage

```typescript
import { ConnectServiceSyncError } from "@vercel/sdk/models/connectservicesyncerror.js";

let value: ConnectServiceSyncError = {
  message: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `message`                                                | *string*                                                 | :heavy_check_mark:                                       | Human-readable provider synchronization error.           |
| `fields`                                                 | *string*[]                                               | :heavy_minus_sign:                                       | Connector fields that caused the synchronization error.  |
| `vendor`                                                 | Record<string, *any*>                                    | :heavy_minus_sign:                                       | Provider-specific error details that are safe to expose. |