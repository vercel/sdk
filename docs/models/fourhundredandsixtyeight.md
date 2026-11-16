# FourHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndSixtyEight } from "@vercel/sdk/models/payloadcodereviewselection.js";

let value: FourHundredAndSixtyEight = {
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