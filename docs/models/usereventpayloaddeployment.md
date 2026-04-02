# UserEventPayloadDeployment

## Example Usage

```typescript
import { UserEventPayloadDeployment } from "@vercel/sdk/models/usereventpayloadproject.js";

let value: UserEventPayloadDeployment = {
  id: "<id>",
  name: "<value>",
  meta: {
    "key": "<value>",
    "key1": "<value>",
  },
  url: "https://trusting-sandbar.net",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |