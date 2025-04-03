# PayloadDismissedToasts

## Example Usage

```typescript
import { PayloadDismissedToasts } from "@vercel/sdk/models/userevent.js";

let value: PayloadDismissedToasts = {
  name: "<value>",
  dismissals: [
    {
      scopeId: "<id>",
      createdAt: 282.56,
    },
  ],
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `dismissals`                                                 | [models.PayloadDismissals](../models/payloaddismissals.md)[] | :heavy_check_mark:                                           | N/A                                                          |