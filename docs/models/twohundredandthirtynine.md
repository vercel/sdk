# TwoHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyNine } from "@vercel/sdk/models/usereventpayloaddeploymenttype.js";

let value: TwoHundredAndThirtyNine = {
  passwordProtection: {
    deploymentType: "all",
  },
  oldPasswordProtection: {
    deploymentType: "preview",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `projectId`                        | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `projectName`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |