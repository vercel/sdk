# CreateSessionSnapshotRequestBody

## Example Usage

```typescript
import { CreateSessionSnapshotRequestBody } from "@vercel/sdk/models/createsessionsnapshotop.js";

let value: CreateSessionSnapshotRequestBody = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expiration`                                                                                             | *models.CreateSessionSnapshotExpiration*                                                                 | :heavy_minus_sign:                                                                                       | The number of milliseconds after which the snapshot will expire and be deleted. Use 0 for no expiration. |