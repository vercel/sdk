# OneHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwenty } from "@vercel/sdk/models/onehundredandtwenty.js";

let value: OneHundredAndTwenty = {
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