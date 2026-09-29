# FortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FortyTwo } from "@vercel/sdk/models/userevent.js";

let value: FortyTwo = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessGroup`                                                                      | [models.UserEventPayload42AccessGroup](../models/usereventpayload42accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `entitlementsAdded`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `entitlementsRemoved`                                                              | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamPermissions`                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamRoles`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamPermissions`                                                                  | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamRoles`                                                                        | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |