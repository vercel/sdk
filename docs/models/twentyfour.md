# TwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyFour } from "@vercel/sdk/models/action.js";

let value: TwentyFour = {
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
| `teamRoles`                                    | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `teamPermissions`                              | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `entitlements`                                 | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |