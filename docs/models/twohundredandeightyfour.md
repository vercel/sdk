# TwoHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyFour } from "@vercel/sdk/models/twohundredandeighty.js";

let value: TwoHundredAndEightyFour = {
  ssoProtection: "prod_deployment_urls_and_all_previews",
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |