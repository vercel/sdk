# FiveHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyEight } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyEight = {
  protectedProjectCount: 0.42,
  protectionEnabled: true,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |