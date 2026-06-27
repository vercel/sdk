# ThreeHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySix } from "@vercel/sdk/models/threehundredandsixteen.js";

let value: ThreeHundredAndFiftySix = {
  vulnerabilities: [
    "<value 1>",
  ],
  protectionEnabled: false,
  protectedProjectCount: 7638.16,
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |