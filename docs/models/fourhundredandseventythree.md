# FourHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSeventyThree } from "@vercel/sdk/models/fourhundredandthirtyfour.js";

let value: FourHundredAndSeventyThree = {
  protectedProjectCount: 5949.13,
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