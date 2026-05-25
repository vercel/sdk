# UserEventPayload80Deployment

## Example Usage

```typescript
import { UserEventPayload80Deployment } from "@vercel/sdk/models/resources.js";

let value: UserEventPayload80Deployment = {
  id: "<id>",
  name: "<value>",
  meta: {
    "key": "<value>",
  },
  url: "https://usable-bungalow.name",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |