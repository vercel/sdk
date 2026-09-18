# TwoHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyThree } from "@vercel/sdk/models/trigger.js";

let value: TwoHundredAndFortyThree = {
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