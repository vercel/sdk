# TwoHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFive } from "@vercel/sdk/models/usereventpayload161next.js";

let value: TwoHundredAndFive = {
  ssoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |