# FourHundredAndNinetyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetyTwo } from "@vercel/sdk/models/fourhundredandfortyfive.js";

let value: FourHundredAndNinetyTwo = {
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