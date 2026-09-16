# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/twentynine.js";

let value: ThirtySix = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
  author: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `accessGroup`                                                | [models.PayloadAccessGroup](../models/payloadaccessgroup.md) | :heavy_check_mark:                                           | N/A                                                          |
| `author`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |