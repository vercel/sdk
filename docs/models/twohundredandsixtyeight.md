# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/usereventpayload252previousdeploymenttype.js";

let value: TwoHundredAndSixtyEight = {
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