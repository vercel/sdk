# FiftyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiftyNine } from "@vercel/sdk/models/twenty.js";

let value: FiftyNine = {
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