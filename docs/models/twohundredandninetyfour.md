# TwoHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFour } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndNinetyFour = {
  ssoProtection: "preview",
  oldSsoProtection: "all_except_custom_domains",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |