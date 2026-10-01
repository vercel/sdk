# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/via3.js";

let value: FortyTwo = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `accessGroup`                                  | [models.AccessGroup](../models/accessgroup.md) | :heavy_check_mark:                             | N/A                                            |
| `entitlements`                                 | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `teamPermissions`                              | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `teamRoles`                                    | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |