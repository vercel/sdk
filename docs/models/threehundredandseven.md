# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/environment.js";

let value: ThreeHundredAndSeven = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: true,
  protectedProjectCount: 4956.75,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |