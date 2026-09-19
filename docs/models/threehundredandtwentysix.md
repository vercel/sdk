# ThreeHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySix } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndTwentySix = {
  oldSsoProtection: {
    deploymentType: "preview",
  },
  ssoProtection: {
    deploymentType: "all",
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `oldSsoProtection`                                                 | *models.OldSsoProtection*                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `projectId`                                                        | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `projectName`                                                      | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `scope`                                                            | [models.UserEventPayloadScope](../models/usereventpayloadscope.md) | :heavy_minus_sign:                                                 | N/A                                                                |
| `ssoProtection`                                                    | *models.PayloadSsoProtection*                                      | :heavy_check_mark:                                                 | N/A                                                                |