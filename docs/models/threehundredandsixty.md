# ThreeHundredAndSixty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixty } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndSixty = {
  oldSsoProtection: "all",
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `oldSsoProtection`               | *models.PayloadOldSsoProtection* | :heavy_check_mark:               | N/A                              |
| `projectId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `projectName`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `ssoProtection`                  | *models.PayloadSsoProtection*    | :heavy_check_mark:               | N/A                              |