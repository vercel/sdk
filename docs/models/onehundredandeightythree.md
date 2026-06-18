# OneHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyThree } from "@vercel/sdk/models/usereventpayloaddeploymenttype.js";

let value: OneHundredAndEightyThree = {
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