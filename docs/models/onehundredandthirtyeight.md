# OneHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyEight } from "@vercel/sdk/models/ninetyeight.js";

let value: OneHundredAndThirtyEight = {
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