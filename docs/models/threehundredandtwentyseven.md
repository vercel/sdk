# ThreeHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentySeven } from "@vercel/sdk/models/twohundredandeightytwo.js";

let value: ThreeHundredAndTwentySeven = {
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
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