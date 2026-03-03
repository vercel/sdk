# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_check_mark:    | N/A                   |
| `targetDeploymentId`  | *string*              | :heavy_minus_sign:    | N/A                   |
| `newTargetPercentage` | *number*              | :heavy_minus_sign:    | N/A                   |