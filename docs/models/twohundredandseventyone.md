# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/twohundredandfiftyeight.js";

let value: TwoHundredAndSeventyOne = {
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