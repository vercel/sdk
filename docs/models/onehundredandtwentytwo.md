# OneHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyTwo } from "@vercel/sdk/models/usereventpayload70project.js";

let value: OneHundredAndTwentyTwo = {
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