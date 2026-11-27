# FourHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwo } from "@vercel/sdk/models/threehundredandeightysix.js";

let value: FourHundredAndTwo = {
  expiryNotificationLeadTime: 666.83,
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