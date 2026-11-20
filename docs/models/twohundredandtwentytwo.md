# TwoHundredAndTwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyTwo } from "@vercel/sdk/models/newprojects.js";

let value: TwoHundredAndTwentyTwo = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 5457.12,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `integrationId`           | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationName`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationSlug`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `previousSecretExpiresAt` | *number*                  | :heavy_check_mark:        | N/A                       |