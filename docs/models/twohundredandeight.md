# TwoHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEight } from "@vercel/sdk/models/usereventpayload161next.js";

let value: TwoHundredAndEight = {
  projectId: "<id>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `projectId`                                                | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `reasonCode`                                               | [models.PayloadReasonCode](../models/payloadreasoncode.md) | :heavy_minus_sign:                                         | N/A                                                        |