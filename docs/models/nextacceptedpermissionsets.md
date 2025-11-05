# NextAcceptedPermissionSets

## Example Usage

```typescript
import { NextAcceptedPermissionSets } from "@vercel/sdk/models/userevent.js";

let value: NextAcceptedPermissionSets = {
  userPermissionSet: {
    type: "list",
    items: {
      type: {},
    },
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `userPermissionSet`                                                      | [models.PayloadUserPermissionSet](../models/payloaduserpermissionset.md) | :heavy_check_mark:                                                       | N/A                                                                      |