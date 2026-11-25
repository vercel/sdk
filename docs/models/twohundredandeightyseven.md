# TwoHundredAndEightySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightySeven } from "@vercel/sdk/models/twohundredandsixtyseven.js";

let value: TwoHundredAndEightySeven = {
  perimeter: {
    id: "<id>",
    name: "<value>",
    version: 104.44,
  },
  sourceVersion: 1879.14,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `perimeter`                                              | [models.PayloadPerimeter](../models/payloadperimeter.md) | :heavy_check_mark:                                       | N/A                                                      |
| `sourceVersion`                                          | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |