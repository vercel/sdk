# FiveHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyFive } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyFive = {
  next: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
    ],
  },
  previous: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload545Next](../models/usereventpayload545next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload545Previous](../models/usereventpayload545previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload545Scope](../models/usereventpayload545scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |