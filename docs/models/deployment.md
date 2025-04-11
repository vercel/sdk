# Deployment

## Example Usage

```typescript
import { Deployment } from "@vercel/sdk/models/userevent.js";

let value: Deployment = {
  id: "<id>",
  name: "<value>",
  url: "https://clueless-hyena.info/",
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