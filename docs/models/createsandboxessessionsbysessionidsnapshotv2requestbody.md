# CreateSandboxesSessionsBySessionIdSnapshotV2RequestBody

## Example Usage

```typescript
import { CreateSandboxesSessionsBySessionIdSnapshotV2RequestBody } from "@vercel/sdk/models/createsandboxessessionsbysessionidsnapshotv2op.js";

let value: CreateSandboxesSessionsBySessionIdSnapshotV2RequestBody = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `expiration`                                                                                             | *models.CreateSandboxesSessionsBySessionIdSnapshotV2Expiration*                                          | :heavy_minus_sign:                                                                                       | The number of milliseconds after which the snapshot will expire and be deleted. Use 0 for no expiration. |