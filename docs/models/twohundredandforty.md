# TwoHundredAndForty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndForty } from "@vercel/sdk/models/payloaddefault.js";

let value: TwoHundredAndForty = {
  projectId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `prevProjectAnalytics` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `projectAnalytics`     | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectName`          | *string*               | :heavy_minus_sign:     | N/A                    |