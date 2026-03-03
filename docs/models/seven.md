# Seven

The payload of the event, if requested.

## Example Usage

```typescript
import { Seven } from "@vercel/sdk/models/userevent.js";

let value: Seven = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `accessGroup`                                                                  | [models.UserEventPayloadAccessGroup](../models/usereventpayloadaccessgroup.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previousName`                                                                 | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamRoles`                                                                    | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previousTeamRoles`                                                            | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `teamPermissions`                                                              | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previousTeamPermissions`                                                      | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `entitlementsAdded`                                                            | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `entitlementsRemoved`                                                          | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |