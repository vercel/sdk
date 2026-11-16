# FiveHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEight } from "@vercel/sdk/models/fourhundredandeightyseven.js";

let value: FiveHundredAndEight = {
  protectedProjectCount: 4465.28,
  protectionEnabled: true,
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |