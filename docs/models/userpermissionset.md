# UserPermissionSet

## Example Usage

```typescript
import { UserPermissionSet } from "@vercel/sdk/models/userevent.js";

let value: UserPermissionSet = {
  type: "list",
  items: {
    type: {},
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `type`                                                                 | [models.UserEventPayload157Type](../models/usereventpayload157type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [models.Items](../models/items.md)                                     | :heavy_check_mark:                                                     | N/A                                                                    |