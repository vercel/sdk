# ThreeHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEighty } from "@vercel/sdk/models/ssoprotectioncve55182migrationappliedfrom.js";

let value: ThreeHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `addedAddresses`                                   | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `oldTrustedIps`                                    | [models.OldTrustedIps](../models/oldtrustedips.md) | :heavy_minus_sign:                                 | N/A                                                |
| `projectId`                                        | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `projectName`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `removedAddresses`                                 | *string*[]                                         | :heavy_minus_sign:                                 | N/A                                                |
| `trustedIps`                                       | [models.TrustedIps](../models/trustedips.md)       | :heavy_minus_sign:                                 | N/A                                                |