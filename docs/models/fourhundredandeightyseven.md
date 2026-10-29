# FourHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndEightySeven } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndEightySeven = {
  protectedProjectCount: 7175.58,
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