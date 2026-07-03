# OneHundredAndFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFive } from "@vercel/sdk/models/usereventpayload70project.js";

let value: OneHundredAndFive = {
  previousServiceType: "<value>",
  serviceType: "<value>",
  id: "<id>",
  name: "<value>",
  nameservers: [],
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