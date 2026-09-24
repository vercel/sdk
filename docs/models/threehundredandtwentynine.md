# ThreeHundredAndTwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyNine } from "@vercel/sdk/models/twohundredandeightythree.js";

let value: ThreeHundredAndTwentyNine = {
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