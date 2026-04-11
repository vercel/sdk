# Nine

The payload of the event, if requested.

## Example Usage

```typescript
import { Nine } from "@vercel/sdk/models/userevent.js";

let value: Nine = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `accessGroup`                                                                    | [models.UserEventPayload9AccessGroup](../models/usereventpayload9accessgroup.md) | :heavy_check_mark:                                                               | N/A                                                                              |
| `name`                                                                           | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `previousName`                                                                   | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `teamRoles`                                                                      | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `previousTeamRoles`                                                              | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `teamPermissions`                                                                | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `previousTeamPermissions`                                                        | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `entitlementsAdded`                                                              | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `entitlementsRemoved`                                                            | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |