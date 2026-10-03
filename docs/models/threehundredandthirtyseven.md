# ThreeHundredAndThirtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThirtySeven } from "@vercel/sdk/models/twohundredandninetyfive.js";

let value: ThreeHundredAndThirtySeven = {
  oldSsoProtection: "all",
  ssoProtection: "all_except_custom_domains",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `oldSsoProtection`               | *models.PayloadOldSsoProtection* | :heavy_check_mark:               | N/A                              |
| `projectId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `projectName`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `ssoProtection`                  | *models.PayloadSsoProtection*    | :heavy_check_mark:               | N/A                              |