# FiveHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFiftyOne } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFiftyOne = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
    ],
  },
  previous: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload551Next](../models/usereventpayload551next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload551Previous](../models/usereventpayload551previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload551Scope](../models/usereventpayload551scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |