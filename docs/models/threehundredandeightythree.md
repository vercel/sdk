# ThreeHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyThree } from "@vercel/sdk/models/threehundredandfortythree.js";

let value: ThreeHundredAndEightyThree = {
  vulnerabilities: [
    "<value 1>",
    "<value 2>",
    "<value 3>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 4851.72,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |