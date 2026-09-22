# ThreeHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFive } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndFive = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: null,
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |
| `passwordChanged`                  | *boolean*                          | :heavy_minus_sign:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `projectId`                        | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `projectName`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |