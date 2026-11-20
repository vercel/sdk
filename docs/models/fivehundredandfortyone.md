# FiveHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndFortyOne } from "@vercel/sdk/models/payloadoutcome.js";

let value: FiveHundredAndFortyOne = {
  next: {
    enabled: false,
    issuerUrls: [],
  },
  previous: {
    enabled: true,
    issuerUrls: [],
  },
  scope: "team",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload541Next](../models/usereventpayload541next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload541Previous](../models/usereventpayload541previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload541Scope](../models/usereventpayload541scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |