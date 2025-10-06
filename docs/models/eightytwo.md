# EightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyTwo } from "@vercel/sdk/models/userevent.js";

let value: EightyTwo = {
  projectName: "<value>",
  ssoProtection: {
    deploymentType: "preview",
  },
  oldSsoProtection: {
    deploymentType: "all_except_custom_domains",
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |