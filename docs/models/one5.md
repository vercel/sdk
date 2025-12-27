# One5

## Example Usage

```typescript
import { One5 } from "@vercel/sdk/models/getorderop.js";

let value: One5 = {
  code: "claims-required",
  details: {
    message: "<value>",
    domainNames: [
      "<value 1>",
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `code`                                                   | *"claims-required"*                                      | :heavy_check_mark:                                       | N/A                                                      |
| `details`                                                | [models.GetOrder1Details](../models/getorder1details.md) | :heavy_check_mark:                                       | N/A                                                      |