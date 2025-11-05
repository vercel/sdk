# GetOrder12

## Example Usage

```typescript
import { GetOrder12 } from "@vercel/sdk/models/getorderop.js";

let value: GetOrder12 = {
  code: "tld-outage",
  details: {
    tlds: [
      {
        tldName: "<value>",
        endsAt: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `code`                                                   | [models.GetOrder1Code](../models/getorder1code.md)       | :heavy_check_mark:                                       | N/A                                                      |
| `details`                                                | [models.GetOrder1Details](../models/getorder1details.md) | :heavy_check_mark:                                       | N/A                                                      |