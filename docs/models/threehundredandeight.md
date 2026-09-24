# ThreeHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEight } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndEight = {
  oldPasswordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  passwordProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `oldPasswordProtection`               | *models.PayloadOldPasswordProtection* | :heavy_check_mark:                    | N/A                                   |
| `passwordChanged`                     | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `passwordProtection`                  | *models.PayloadPasswordProtection*    | :heavy_check_mark:                    | N/A                                   |
| `projectId`                           | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `projectName`                         | *string*                              | :heavy_minus_sign:                    | N/A                                   |