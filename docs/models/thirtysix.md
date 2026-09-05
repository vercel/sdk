# ThirtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThirtySix } from "@vercel/sdk/models/twentynine.js";

let value: ThirtySix = {
  accessGroup: {
    id: "<id>",
    name: "<value>",
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `accessGroup`                                                                      | [models.UserEventPayload36AccessGroup](../models/usereventpayload36accessgroup.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `name`                                                                             | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousName`                                                                     | *string*                                                                           | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamRoles`                                                                        | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamRoles`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `teamPermissions`                                                                  | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `previousTeamPermissions`                                                          | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `entitlementsAdded`                                                                | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |
| `entitlementsRemoved`                                                              | *string*[]                                                                         | :heavy_minus_sign:                                                                 | N/A                                                                                |