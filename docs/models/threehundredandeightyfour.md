# ThreeHundredAndEightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyFour } from "@vercel/sdk/models/usereventpayload328previous.js";

let value: ThreeHundredAndEightyFour = {
  oldSsoProtection: {
    deploymentType: "preview",
  },
  ssoProtection: null,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `oldSsoProtection`               | *models.PayloadOldSsoProtection* | :heavy_check_mark:               | N/A                              |
| `projectId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `projectName`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `ssoProtection`                  | *models.PayloadSsoProtection*    | :heavy_check_mark:               | N/A                              |