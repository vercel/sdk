# TwoHundredAndSeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventySeven } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndSeventySeven = {
  passwordProtection: "prod_deployment_urls_and_all_previews",
  oldPasswordProtection: "preview",
};
```

## Fields

| Field                              | Type                               | Required                           | Description                        |
| ---------------------------------- | ---------------------------------- | ---------------------------------- | ---------------------------------- |
| `projectId`                        | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `projectName`                      | *string*                           | :heavy_minus_sign:                 | N/A                                |
| `passwordProtection`               | *models.PayloadPasswordProtection* | :heavy_check_mark:                 | N/A                                |
| `oldPasswordProtection`            | *models.OldPasswordProtection*     | :heavy_check_mark:                 | N/A                                |