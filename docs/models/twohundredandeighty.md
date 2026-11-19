# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/twohundredandfiftytwo.js";

let value: TwoHundredAndEighty = {
  perimeter: {
    id: "<id>",
    name: "<value>",
    version: 9659.32,
  },
  sourceVersion: 294.68,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `perimeter`                                              | [models.PayloadPerimeter](../models/payloadperimeter.md) | :heavy_check_mark:                                       | N/A                                                      |
| `sourceVersion`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |