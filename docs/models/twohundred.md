# TwoHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundred } from "@vercel/sdk/models/onehundredandfiftyone.js";

let value: TwoHundred = {
  ssoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
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