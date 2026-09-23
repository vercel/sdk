# FourHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFiftyOne } from "@vercel/sdk/models/fourhundredandeleven.js";

let value: FourHundredAndFiftyOne = {
  protectedProjectCount: 8089.81,
  protectionEnabled: true,
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