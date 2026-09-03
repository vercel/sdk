# OneHundredAndNinetyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyOne } from "@vercel/sdk/models/bandwidth.js";

let value: OneHundredAndNinetyOne = {
  enabled: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `enabled`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `allowedIntegrationCount` | *number*                  | :heavy_minus_sign:        | N/A                       |
| `allowedIntegrationIds`   | *string*[]                | :heavy_minus_sign:        | N/A                       |