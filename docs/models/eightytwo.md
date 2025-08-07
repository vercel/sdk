# EightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyTwo } from "@vercel/sdk/models/userevent.js";

let value: EightyTwo = {
  projectName: "<value>",
  passwordProtection: {
    deploymentType: "preview",
  },
  oldPasswordProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `projectName`                      | *string*                           | :heavy_check_mark:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |