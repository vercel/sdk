# TwoHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeven } from "@vercel/sdk/models/twohundredandsix.js";

let value: TwoHundredAndSeven = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 961.94,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `integrationId`           | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationName`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationSlug`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `previousSecretExpiresAt` | *number*                  | :heavy_check_mark:        | N/A                       |