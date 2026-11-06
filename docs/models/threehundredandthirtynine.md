# ThreeHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtyNine } from "@vercel/sdk/models/twohundredandseventythree.js";

let value: ThreeHundredAndThirtyNine = {
  oldPasswordProtection: "prod_deployment_urls_and_all_previews",
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