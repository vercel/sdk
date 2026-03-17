# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: TwoHundredAndFive = {
  projectId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `reasonCode`                                               | [models.PayloadReasonCode](../models/payloadreasoncode.md) | :heavy_minus_sign:                                         | N/A                                                        |