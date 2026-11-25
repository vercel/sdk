# FiveHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFifty } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFifty = {
  next: {
    enabled: false,
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
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload550Next](../models/usereventpayload550next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload550Previous](../models/usereventpayload550previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload550Scope](../models/usereventpayload550scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |