# OneHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThree = {
  ssoProtection: "preview",
  oldSsoProtection: "all",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `projectId`                   | *string*                      | :heavy_minus_sign:            | N/A                           |
| `projectName`                 | *string*                      | :heavy_minus_sign:            | N/A                           |
| `ssoProtection`               | *models.PayloadSsoProtection* | :heavy_check_mark:            | N/A                           |
| `oldSsoProtection`            | *models.OldSsoProtection*     | :heavy_check_mark:            | N/A                           |