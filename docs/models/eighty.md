# Eighty

The payload of the event, if requested.

## Example Usage

```typescript
import { Eighty } from "@vercel/sdk/models/userevent.js";

let value: Eighty = {
  projectName: "<value>",
  ssoProtection: "all",
  oldSsoProtection: "preview",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `projectName`             | *string*                  | :heavy_check_mark:        | N/A                       |
| `ssoProtection`           | *models.SsoProtection*    | :heavy_check_mark:        | N/A                       |
| `oldSsoProtection`        | *models.OldSsoProtection* | :heavy_check_mark:        | N/A                       |