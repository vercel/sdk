# FiveHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyFive } from "@vercel/sdk/models/usereventpayload499next.js";

let value: FiveHundredAndThirtyFive = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
    issuerUrls: [],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload535Next](../models/usereventpayload535next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload535Previous](../models/usereventpayload535previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload535Scope](../models/usereventpayload535scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |