# OneHundredAndTwentyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndTwentyThree } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndTwentyThree = {
  previous: {
    enabled: false,
    totpVerified: false,
  },
  next: {
    enabled: true,
    totpVerified: true,
  },
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `previous`                                             | [models.PayloadPrevious](../models/payloadprevious.md) | :heavy_check_mark:                                     | N/A                                                    |
| `next`                                                 | [models.PayloadNext](../models/payloadnext.md)         | :heavy_check_mark:                                     | N/A                                                    |