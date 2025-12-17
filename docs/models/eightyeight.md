# EightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyEight } from "@vercel/sdk/models/userevent.js";

let value: EightyEight = {
  projectName: "<value>",
  ssoProtection: "all_except_custom_domains",
  oldSsoProtection: {
    deploymentType: "all",
  },
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |