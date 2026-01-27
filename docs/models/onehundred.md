# OneHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundred } from "@vercel/sdk/models/userevent.js";

let value: OneHundred = {
  projectId: "<id>",
  projectName: "<value>",
  ssoProtection: "all_except_custom_domains",
  oldSsoProtection: null,
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_check_mark:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_check_mark:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |