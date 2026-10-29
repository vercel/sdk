# FourHundredAndNinetySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { FourHundredAndNinetySeven } from "@vercel/sdk/models/usereventpayload453actortype.js";

let value: FourHundredAndNinetySeven = {
  next: {
    enabled: false,
    issuerUrls: [],
  },
  previous: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload497Next](../models/usereventpayload497next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload497Previous](../models/usereventpayload497previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload497Scope](../models/usereventpayload497scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |