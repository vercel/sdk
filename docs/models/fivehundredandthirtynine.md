# FiveHundredAndThirtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirtyNine } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndThirtyNine = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload539Next](../models/usereventpayload539next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload539Previous](../models/usereventpayload539previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload539Scope](../models/usereventpayload539scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |