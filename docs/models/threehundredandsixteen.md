# ThreeHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixteen } from "@vercel/sdk/models/threehundredandeight.js";

let value: ThreeHundredAndSixteen = {
  previousRole: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `directoryType`                                              | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `ssoType`                                                    | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `updatedUser`                                                | [models.PayloadUpdatedUser](../models/payloadupdateduser.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `role`                                                       | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `previousRole`                                               | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `updatedUid`                                                 | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `origin`                                                     | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |
| `teamSlug`                                                   | *string*                                                     | :heavy_minus_sign:                                           | N/A                                                          |