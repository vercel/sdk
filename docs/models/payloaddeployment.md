# PayloadDeployment

## Example Usage

```typescript
import { PayloadDeployment } from "@vercel/sdk/models/userevent.js";

let value: PayloadDeployment = {
  id: "<id>",
  name: "<value>",
  url: "https://idolized-valuable.biz",
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