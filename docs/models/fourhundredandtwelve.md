# FourHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndTwelve } from "@vercel/sdk/models/store.js";

let value: FourHundredAndTwelve = {
  next: "auto-approval",
  previous: "auto-approval",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload412Next](../models/usereventpayload412next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload412Previous](../models/usereventpayload412previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamSlug`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |