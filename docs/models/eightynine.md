# EightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyNine } from "@vercel/sdk/models/userevent.js";

let value: EightyNine = {
  projectName: "<value>",
  ssoProtection: {
    deploymentType: "all_except_custom_domains",
  },
  oldSsoProtection: null,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |