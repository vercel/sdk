# CreateSandboxesSessionsBySessionIdSnapshotV3RequestBody

## Example Usage

```typescript
import { CreateSandboxesSessionsBySessionIdSnapshotV3RequestBody } from "@vercel/sdk/models/createsandboxessessionsbysessionidsnapshotv3op.js";

let value: CreateSandboxesSessionsBySessionIdSnapshotV3RequestBody = {};
```

## Fields

| Field                                                                                                                                                                                                      | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `expiration`                                                                                                                                                                                               | *models.CreateSandboxesSessionsBySessionIdSnapshotV3Expiration*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                         | The number of milliseconds after which the snapshot will expire and be deleted. Defaults to 7 days when neither this field nor the sandbox configuration specifies an expiration. Use 0 for no expiration. |