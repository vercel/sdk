# PayloadUserPermissionSet

## Example Usage

```typescript
import { PayloadUserPermissionSet } from "@vercel/sdk/models/userevent.js";

let value: PayloadUserPermissionSet = {
  type: "list",
  items: {
    type: {},
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload158Type](../models/usereventpayload158type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.PayloadItems](../models/payloaditems.md)                       | :heavy_check_mark:                                                     | N/A                                                                    |