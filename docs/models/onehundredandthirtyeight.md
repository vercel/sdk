# OneHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyEight } from "@vercel/sdk/models/usereventjobcommitverification.js";

let value: OneHundredAndThirtyEight = {
  id: "<id>",
  name: "<value>",
  nameservers: [
    "<value 1>",
  ],
  previousServiceType: "<value>",
  serviceType: "<value>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `id`                  | *string*              | :heavy_check_mark:    | N/A                   |
| `name`                | *string*              | :heavy_check_mark:    | N/A                   |
| `nameservers`         | *string*[]            | :heavy_check_mark:    | N/A                   |
| `previousServiceType` | *string*              | :heavy_check_mark:    | N/A                   |
| `serviceType`         | *string*              | :heavy_check_mark:    | N/A                   |