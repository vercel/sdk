# ThreeHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeventyEight } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndSeventyEight = {
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  ssoProtection: "all",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `oldSsoProtection`               | *models.PayloadOldSsoProtection* | :heavy_check_mark:               | N/A                              |
| `projectId`                      | *string*                         | :heavy_minus_sign:               | N/A                              |
| `projectName`                    | *string*                         | :heavy_minus_sign:               | N/A                              |
| `ssoProtection`                  | *models.PayloadSsoProtection*    | :heavy_check_mark:               | N/A                              |