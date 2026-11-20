# FiveHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentyEight = {
  protectedProjectCount: 7319.99,
  protectionEnabled: false,
  vulnerabilities: [
    "<value 1>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |