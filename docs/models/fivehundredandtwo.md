# FiveHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwo } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FiveHundredAndTwo = {
  protectedProjectCount: 4187.06,
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