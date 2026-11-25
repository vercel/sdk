# FourHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndOne } from "@vercel/sdk/models/usereventpayload385project.js";

let value: FourHundredAndOne = {
  expiryNotificationLeadTime: 8763.22,
  projectId: "<id>",
  projectName: "<value>",
  sandboxName: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `expiryNotificationLeadTime` | *number*                     | :heavy_check_mark:           | N/A                          |
| `projectId`                  | *string*                     | :heavy_check_mark:           | N/A                          |
| `projectName`                | *string*                     | :heavy_check_mark:           | N/A                          |
| `sandboxName`                | *string*                     | :heavy_check_mark:           | N/A                          |