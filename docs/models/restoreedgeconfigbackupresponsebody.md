# RestoreEdgeConfigBackupResponseBody

## Example Usage

```typescript
import { RestoreEdgeConfigBackupResponseBody } from "@vercel/sdk/models/restoreedgeconfigbackupop.js";

let value: RestoreEdgeConfigBackupResponseBody = {
  status: "ok",
  restoredFrom: "<value>",
  previousDigest: "<value>",
  digest: "<value>",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `status`                                                                           | [models.RestoreEdgeConfigBackupStatus](../models/restoreedgeconfigbackupstatus.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `restoredFrom`                                                                     | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `previousDigest`                                                                   | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |
| `digest`                                                                           | *string*                                                                           | :heavy_check_mark:                                                                 | N/A                                                                                |