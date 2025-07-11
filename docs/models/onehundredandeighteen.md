# OneHundredAndEighteen

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighteen } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEighteen = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: false,
  },
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `previous`                               | [models.Previous](../models/previous.md) | :heavy_check_mark:                       | N/A                                      |
| `next`                                   | [models.Next](../models/next.md)         | :heavy_check_mark:                       | N/A                                      |