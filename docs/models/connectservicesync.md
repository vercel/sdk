# ConnectServiceSync

Provider-side configuration synchronization result.

## Example Usage

```typescript
import { ConnectServiceSync } from "@vercel/sdk/models/connectservicesync.js";

let value: ConnectServiceSync = {
  status: "required",
};
```

## Fields

| Field                                                                                                                                           | Type                                                                                                                                            | Required                                                                                                                                        | Description                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`                                                                                                                                        | [models.ConnectServiceSyncStatus](../models/connectservicesyncstatus.md)                                                                        | :heavy_check_mark:                                                                                                                              | done means the external service was updated. required means the Vercel update was saved, but provider-side configuration still needs attention. |
| `errors`                                                                                                                                        | [models.ConnectServiceSyncError](../models/connectservicesyncerror.md)[]                                                                        | :heavy_minus_sign:                                                                                                                              | Provider synchronization errors. Present when serviceSync.status is required.                                                                   |