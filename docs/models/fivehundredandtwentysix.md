# FiveHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentySix } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndTwentySix = {
  protectedProjectCount: 3965.79,
  protectionEnabled: true,
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