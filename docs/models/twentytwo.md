# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwentyTwo = {
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