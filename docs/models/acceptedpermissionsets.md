# AcceptedPermissionSets

## Example Usage

```typescript
import { AcceptedPermissionSets } from "@vercel/sdk/models/userevent.js";

let value: AcceptedPermissionSets = {
  userPermissionSet: {
    type: "list",
    items: {
      type: {},
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `userPermissionSet`                                        | [models.UserPermissionSet](../models/userpermissionset.md) | :heavy_check_mark:                                         | N/A                                                        |