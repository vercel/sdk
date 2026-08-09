# ThreeHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyNine } from "@vercel/sdk/models/usereventpayload373previous.js";

let value: ThreeHundredAndSeventyNine = {
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