# FiveHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwo } from "@vercel/sdk/models/usereventpayload458actortype.js";

let value: FiveHundredAndTwo = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
    ],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload502Next](../models/usereventpayload502next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload502Previous](../models/usereventpayload502previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload502Scope](../models/usereventpayload502scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |