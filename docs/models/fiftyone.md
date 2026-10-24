# FiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyOne } from "@vercel/sdk/models/twentyone.js";

let value: FiftyOne = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessGroup`                                                                      | [models.UserEventPayload51AccessGroup](../models/usereventpayload51accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `entitlementsAdded`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `entitlementsRemoved`                                                              | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamPermissions`                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamRoles`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamPermissions`                                                                  | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamRoles`                                                                        | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |