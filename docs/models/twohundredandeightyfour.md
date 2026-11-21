# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/usereventpayload260next.js";

let value: TwoHundredAndEightyFour = {
  perimeter: {
    id: "<id>",
    name: "<value>",
    version: 8846.95,
  },
  sourceVersion: 7244.07,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `perimeter`                                              | [models.PayloadPerimeter](../models/payloadperimeter.md) | :heavy_check_mark:                                       | N/A                                                      |
| `sourceVersion`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |