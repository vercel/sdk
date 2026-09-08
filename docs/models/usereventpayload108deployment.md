# UserEventPayload108Deployment

## Example Usage

```typescript
import { UserEventPayload108Deployment } from "@vercel/sdk/models/onehundredandthree.js";

let value: UserEventPayload108Deployment = {
  name: "<value>",
  id: "<id>",
  meta: {
    "key": "<value>",
    "key1": "<value>",
  },
  url: "https://steep-signature.net/",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |