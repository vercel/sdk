# TwoHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyEight } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndEightyEight = {
  perimeter: {
    id: "<id>",
    name: "<value>",
    version: 2982.59,
  },
  sourceVersion: 2305.86,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `perimeter`                                              | [models.PayloadPerimeter](../models/payloadperimeter.md) | :heavy_check_mark:                                       | N/A                                                      |
| `sourceVersion`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |