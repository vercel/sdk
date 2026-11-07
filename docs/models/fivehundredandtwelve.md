# FiveHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndTwelve } from "@vercel/sdk/models/usereventpayload469actortype.js";

let value: FiveHundredAndTwelve = {
  next: {
    enabled: true,
    issuerUrls: [],
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
| `next`                                                                         | [models.UserEventPayload512Next](../models/usereventpayload512next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload512Previous](../models/usereventpayload512previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload512Scope](../models/usereventpayload512scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |