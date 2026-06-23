# OneHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventeen } from "@vercel/sdk/models/onehundredandtwelve.js";

let value: OneHundredAndSeventeen = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
  edgeConfigBackupVersionId: "<id>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `edgeConfigId`              | *string*                    | :heavy_check_mark:          | N/A                         |
| `edgeConfigSlug`            | *string*                    | :heavy_check_mark:          | N/A                         |
| `edgeConfigDigest`          | *string*                    | :heavy_check_mark:          | N/A                         |
| `edgeConfigBackupVersionId` | *string*                    | :heavy_check_mark:          | N/A                         |