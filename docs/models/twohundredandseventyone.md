# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndSeventyOne = {
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