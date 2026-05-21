# TwoHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtySeven } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndThirtySeven = {
  ssoProtection: "preview",
  oldSsoProtection: {
    deploymentType: "all",
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