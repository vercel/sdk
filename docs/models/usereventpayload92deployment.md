# UserEventPayload92Deployment

## Example Usage

```typescript
import { UserEventPayload92Deployment } from "@vercel/sdk/models/sixtyseven.js";

let value: UserEventPayload92Deployment = {
  id: "<id>",
  name: "<value>",
  meta: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  url: "https://admired-help.com/",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |