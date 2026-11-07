# TwoHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTen } from "@vercel/sdk/models/payloadinitiator.js";

let value: TwoHundredAndTen = {
  integrationId: "<id>",
  integrationName: "<value>",
  integrationSlug: "<value>",
  previousSecretExpiresAt: 6259.57,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `integrationId`           | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationName`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `integrationSlug`         | *string*                  | :heavy_check_mark:        | N/A                       |
| `previousSecretExpiresAt` | *number*                  | :heavy_check_mark:        | N/A                       |