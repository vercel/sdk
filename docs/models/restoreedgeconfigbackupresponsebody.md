# RestoreEdgeConfigBackupResponseBody

## Example Usage

```typescript
import { RestoreEdgeConfigBackupResponseBody } from "@vercel/sdk/models/restoreedgeconfigbackupop.js";

let value: RestoreEdgeConfigBackupResponseBody = {
  digest: "<value>",
  previousDigest: "<value>",
  restoredFrom: "<value>",
  status: "ok",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `digest`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `previousDigest`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `restoredFrom`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `status`                                                                           | [models.RestoreEdgeConfigBackupStatus](../models/restoreedgeconfigbackupstatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |