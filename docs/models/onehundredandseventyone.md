# OneHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndSeventyOne = {
  previous: {
    enabled: true,
    totpVerified: false,
  },
  next: {
    enabled: false,
    totpVerified: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `previous`                                                                     | [models.UserEventPayload171Previous](../models/usereventpayload171previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload171Next](../models/usereventpayload171next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |