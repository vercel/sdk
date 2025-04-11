# UserEventPayloadDeployment

## Example Usage

```typescript
import { UserEventPayloadDeployment } from "@vercel/sdk/models/userevent.js";

let value: UserEventPayloadDeployment = {
  id: "<id>",
  name: "<value>",
  url: "https://posh-sundae.net",
  meta: {
    "key": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `id`                     | *string*                 | :heavy_check_mark:       | N/A                      |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `url`                    | *string*                 | :heavy_check_mark:       | N/A                      |
| `meta`                   | Record<string, *string*> | :heavy_check_mark:       | N/A                      |