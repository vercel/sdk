# TwoHundredAndFortyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyEight } from "@vercel/sdk/models/twohundredandthirtyone.js";

let value: TwoHundredAndFortyEight = {
  ssoProtection: "all",
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