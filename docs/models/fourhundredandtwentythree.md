# FourHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwentyThree } from "@vercel/sdk/models/threehundredandninetysix.js";

let value: FourHundredAndTwentyThree = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 9996.76,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |