# ThirtyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtyFour } from "@vercel/sdk/models/ceilingmode.js";

let value: ThirtyFour = {
  author: "<value>",
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `author`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `accessGroup`                                                | [models.PayloadAccessGroup](../models/payloadaccessgroup.md) | :heavy_check_mark:                                           | N/A                                                          |