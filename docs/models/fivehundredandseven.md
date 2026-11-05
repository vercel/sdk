# FiveHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeven } from "@vercel/sdk/models/usereventpayload464actortype.js";

let value: FiveHundredAndSeven = {
  next: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
    ],
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
| `next`                                                                         | [models.UserEventPayload507Next](../models/usereventpayload507next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload507Previous](../models/usereventpayload507previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload507Scope](../models/usereventpayload507scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |