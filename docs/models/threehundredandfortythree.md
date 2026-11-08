# ThreeHundredAndFortyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFortyThree } from "@vercel/sdk/models/usereventpayload279scope.js";

let value: ThreeHundredAndFortyThree = {
  oldPasswordProtection: {
    deploymentType: "all_except_custom_domains",
  },
  passwordProtection: "all_except_custom_domains",
};
```

## Fields

| Field                                 | Type                                  | Required                              | Description                           |
| ------------------------------------- | ------------------------------------- | ------------------------------------- | ------------------------------------- |
| `oldPasswordProtection`               | *models.PayloadOldPasswordProtection* | :heavy_check_mark:                    | N/A                                   |
| `passwordChanged`                     | *boolean*                             | :heavy_minus_sign:                    | N/A                                   |
| `passwordProtection`                  | *models.PayloadPasswordProtection*    | :heavy_check_mark:                    | N/A                                   |
| `projectId`                           | *string*                              | :heavy_minus_sign:                    | N/A                                   |
| `projectName`                         | *string*                              | :heavy_minus_sign:                    | N/A                                   |