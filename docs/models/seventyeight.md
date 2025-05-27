# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/userevent.js";

let value: SeventyEight = {
  projectName: "<value>",
  ssoProtection: "prod_deployment_urls_and_all_previews",
  oldSsoProtection: {
    deploymentType: "preview",
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `ssoProtection`           | *models.SsoProtection*    | :heavy_check_mark:        | N/A                       |
| `oldSsoProtection`        | *models.OldSsoProtection* | :heavy_check_mark:        | N/A                       |