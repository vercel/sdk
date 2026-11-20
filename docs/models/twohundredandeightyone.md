# TwoHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyOne } from "@vercel/sdk/models/payloaddsyncmode.js";

let value: TwoHundredAndEightyOne = {
  perimeter: {
    id: "<id>",
    name: "<value>",
    version: 4667.2,
  },
  sourceVersion: 5726.32,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `perimeter`                                              | [models.PayloadPerimeter](../models/payloadperimeter.md) | :heavy_check_mark:                                       | N/A                                                      |
| `sourceVersion`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |