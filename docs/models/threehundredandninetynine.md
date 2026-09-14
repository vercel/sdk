# ThreeHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload340budget.js";

let value: ThreeHundredAndNinetyNine = {
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