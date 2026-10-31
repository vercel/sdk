# ThreeHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFiftySeven } from "@vercel/sdk/models/threehundredandthirtytwo.js";

let value: ThreeHundredAndFiftySeven = {
  oldSsoProtection: "all",
  ssoProtection: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `oldSsoProtection`               | *models.PayloadOldSsoProtection* | :heavy_check_mark:               | N/A                              |
| `projectId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `projectName`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `ssoProtection`                  | *models.PayloadSsoProtection*    | :heavy_check_mark:               | N/A                              |