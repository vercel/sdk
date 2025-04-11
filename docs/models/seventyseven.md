# SeventySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventySeven } from "@vercel/sdk/models/userevent.js";

let value: SeventySeven = {
  projectName: "<value>",
  ssoProtection: {
    deploymentType: "all",
  },
  oldSsoProtection: "prod_deployment_urls_and_all_previews",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `ssoProtection`           | *models.SsoProtection*    | :heavy_check_mark:        | N/A                       |
| `oldSsoProtection`        | *models.OldSsoProtection* | :heavy_check_mark:        | N/A                       |