# TwoHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyOne } from "@vercel/sdk/models/twohundredandtwentysix.js";

let value: TwoHundredAndFortyOne = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `projectName`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `trustedIps`                                       | [models.TrustedIps](../models/trustedips.md)       | :heavy_minus_sign:                                 | N/A                                                |
| `oldTrustedIps`                                    | [models.OldTrustedIps](../models/oldtrustedips.md) | :heavy_minus_sign:                                 | N/A                                                |
| `addedAddresses`                                   | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `removedAddresses`                                 | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |