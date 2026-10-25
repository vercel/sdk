# FortyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyNine } from "@vercel/sdk/models/twentyone.js";

let value: FortyNine = {
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