# Forty

The payload of the event, if requested.

## Example Usage

```typescript
import { Forty } from "@vercel/sdk/models/usereventpayloadaccessgroup.js";

let value: Forty = {
  accessGroup: {
    id: "<id>",
  },
  user: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessGroup`                                                                      | [models.UserEventPayload40AccessGroup](../models/usereventpayload40accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `directoryType`                                                                    | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `user`                                                                             | [models.UserEventPayload40User](../models/usereventpayload40user.md)               | :heavy_check_mark:                                                                 | N/A                                                                                |