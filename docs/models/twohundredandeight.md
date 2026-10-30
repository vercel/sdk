# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/newowner.js";

let value: TwoHundredAndEight = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 8322.01,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `integrationId`           | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationName`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationSlug`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `previousSecretExpiresAt` | *number*                  | :heavy_check_mark:        | N/A                       |