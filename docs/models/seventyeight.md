# SeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyEight } from "@vercel/sdk/models/userevent.js";

let value: SeventyEight = {
  projectName: "<value>",
  ssoProtection: "all",
  oldSsoProtection: {
    deploymentType: "prod_deployment_urls_and_all_previews",
  },
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `ssoProtection`           | *models.SsoProtection*    | :heavy_check_mark:        | N/A                       |
| `oldSsoProtection`        | *models.OldSsoProtection* | :heavy_check_mark:        | N/A                       |