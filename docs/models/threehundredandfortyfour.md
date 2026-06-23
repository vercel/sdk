# ThreeHundredAndFortyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyFour } from "@vercel/sdk/models/threehundredandfive.js";

let value: ThreeHundredAndFortyFour = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 3744.51,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |