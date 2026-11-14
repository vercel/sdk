# FiftyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyFive } from "@vercel/sdk/models/usereventvia4type.js";

let value: FiftyFive = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessGroup`                                                | [models.PayloadAccessGroup](../models/payloadaccessgroup.md) | :heavy_check_mark:                                           | N/A                                                          |
| `author`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |