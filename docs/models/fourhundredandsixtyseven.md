# FourHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtySeven } from "@vercel/sdk/models/fourhundredandtwentyseven.js";

let value: FourHundredAndSixtySeven = {
  protectedProjectCount: 2136.74,
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