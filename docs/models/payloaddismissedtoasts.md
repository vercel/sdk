# PayloadDismissedToasts

## Example Usage

```typescript
import { PayloadDismissedToasts } from "@vercel/sdk/models/payloadspeedinsightsfree.js";

let value: PayloadDismissedToasts = {
  dismissals: [
    {
      createdAt: 2783.96,
      scopeId: "<id>",
    },
  ],
  name: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `dismissals`                                                 | [models.PayloadDismissals](../models/payloaddismissals.md)[] | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |