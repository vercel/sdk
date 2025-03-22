# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThree = {};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `directoryType`                                | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `ssoType`                                      | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `invitedUser`                                  | [models.InvitedUser](../models/inviteduser.md) | :heavy_minus_sign:                             | N/A                                            |
| `invitedEmail`                                 | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `invitationRole`                               | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `entitlements`                                 | *string*[]                                     | :heavy_minus_sign:                             | N/A                                            |
| `invitedUid`                                   | *string*                                       | :heavy_minus_sign:                             | N/A                                            |