# FiveHundredAndThirtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyTwo } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyTwo = {
  protectedProjectCount: 9596.59,
  protectionEnabled: true,
  vulnerabilities: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `protectedProjectCount` | *number*                | :heavy_check_mark:      | N/A                     |
| `protectionEnabled`     | *boolean*               | :heavy_check_mark:      | N/A                     |
| `vulnerabilities`       | *string*[]              | :heavy_check_mark:      | N/A                     |