# ThreeHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortySeven } from "@vercel/sdk/models/threehundredandeight.js";

let value: ThreeHundredAndFortySeven = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 6751.6,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |