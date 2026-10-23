# FourHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightyFour } from "@vercel/sdk/models/fourhundredandfortynine.js";

let value: FourHundredAndEightyFour = {
  protectedProjectCount: 9180.47,
  protectionEnabled: false,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |