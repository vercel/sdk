# FiveHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThirteen } from "@vercel/sdk/models/usereventpayload470actortype.js";

let value: FiveHundredAndThirteen = {
  next: {
    enabled: false,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    enabled: true,
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
| `next`                                                                         | [models.UserEventPayload513Next](../models/usereventpayload513next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload513Previous](../models/usereventpayload513previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload513Scope](../models/usereventpayload513scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |