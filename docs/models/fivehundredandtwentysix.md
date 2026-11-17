# FiveHundredAndTwentySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwentySix } from "@vercel/sdk/models/usereventpayload491previous.js";

let value: FiveHundredAndTwentySix = {
  next: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
    ],
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
| `next`                                                                         | [models.UserEventPayload526Next](../models/usereventpayload526next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload526Previous](../models/usereventpayload526previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload526Scope](../models/usereventpayload526scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |