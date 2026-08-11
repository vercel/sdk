# ThreeHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFive } from "@vercel/sdk/models/addedprojects.js";

let value: ThreeHundredAndFive = {
  projectId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `reasonCode`                                               | [models.PayloadReasonCode](../models/payloadreasoncode.md) | :heavy_minus_sign:                                         | N/A                                                        |