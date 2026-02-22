# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/oldteam.js";

let value: SixtyNine = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `previousServiceType` | *string*              | :heavy_check_mark:    | N/A                   |
| `serviceType`         | *string*              | :heavy_check_mark:    | N/A                   |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `nameservers`         | *string*[]            | :heavy_check_mark:    | N/A                   |