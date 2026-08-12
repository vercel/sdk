# FourHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEight } from "@vercel/sdk/models/usereventpayload375previous.js";

let value: FourHundredAndEight = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 3883.22,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |