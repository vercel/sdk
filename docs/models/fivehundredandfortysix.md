# FiveHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortySix } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortySix = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload546Next](../models/usereventpayload546next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload546Previous](../models/usereventpayload546previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload546Scope](../models/usereventpayload546scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |