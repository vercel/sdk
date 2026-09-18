# ThreeHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwo } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: ThreeHundredAndTwo = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: "all_except_custom_domains",
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