# OneHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndOne = {
  projectId: "<id>",
  projectName: "<value>",
  passwordProtection: "preview",
  oldPasswordProtection: {
    deploymentType: "preview",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `projectId`                        | *string*                           | :heavy_check_mark:                 | N/A                                |
| `projectName`                      | *string*                           | :heavy_check_mark:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |