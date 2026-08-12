# ThreeHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndOne } from "@vercel/sdk/models/usereventpayload242next.js";

let value: ThreeHundredAndOne = {
  ssoProtection: "prod_deployment_urls_and_all_previews",
  oldSsoProtection: null,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |