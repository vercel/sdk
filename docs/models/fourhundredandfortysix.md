# FourHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndFortySix } from "@vercel/sdk/models/fourhundredandsix.js";

let value: FourHundredAndFortySix = {
  protectedProjectCount: 9006.34,
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