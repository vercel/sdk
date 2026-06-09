# UserEventPayload83Deployment

## Example Usage

```typescript
import { UserEventPayload83Deployment } from "@vercel/sdk/models/fortyseven.js";

let value: UserEventPayload83Deployment = {
  id: "<id>",
  name: "<value>",
  meta: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  url: "https://weird-hydrolyse.com",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |