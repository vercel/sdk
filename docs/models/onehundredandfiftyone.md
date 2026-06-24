# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/teams.js";

let value: OneHundredAndFiftyOne = {
  enabled: false,
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `enabled`                 | *boolean*                 | :heavy_check_mark:        | N/A                       |
| `allowedIntegrationCount` | *number*                  | :heavy_minus_sign:        | N/A                       |
| `allowedIntegrationIds`   | *string*[]                | :heavy_minus_sign:        | N/A                       |