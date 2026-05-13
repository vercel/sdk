# TwoHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyThree } from "@vercel/sdk/models/enabled.js";

let value: TwoHundredAndEightyThree = {
  uid: "<id>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `role`                                     | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `uid`                                      | *string*                                   | :heavy_check_mark:                         | N/A                                        |
| `origin`                                   | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `teamSlug`                                 | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `teamRoles`                                | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `teamPermissions`                          | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `entitlements`                             | *string*[]                                 | :heavy_minus_sign:                         | N/A                                        |
| `invitedBy`                                | [models.InvitedBy](../models/invitedby.md) | :heavy_minus_sign:                         | N/A                                        |