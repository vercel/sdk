# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: TwoHundredAndFive = {
  passwordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  oldPasswordProtection: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `projectId`                        | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `projectName`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |