# ThreeHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyThree } from "@vercel/sdk/models/usereventpayload334budget.js";

let value: ThreeHundredAndNinetyThree = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `projectId`                                | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `projectName`                              | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `sampling`                                 | [models.Sampling](../models/sampling.md)[] | :heavy_minus_sign:                         | N/A                                        |