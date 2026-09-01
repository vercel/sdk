# TwoHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyOne } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndThirtyOne = {
  projectId: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectName`          | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectId`            | *string*               | :heavy_check_mark:     | N/A                    |
| `projectAnalytics`     | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |
| `prevProjectAnalytics` | Record<string, *any*>  | :heavy_minus_sign:     | N/A                    |