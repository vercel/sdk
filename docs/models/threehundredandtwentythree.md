# ThreeHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyThree } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: ThreeHundredAndTwentyThree = {
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |