# OneHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFifty } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndFifty = {
  enabled: true,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `enabled`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `allowedIntegrationCount` | *number*                  | :heavy_minus_sign:        | N/A                       |
| `allowedIntegrationIds`   | *string*[]                | :heavy_minus_sign:        | N/A                       |