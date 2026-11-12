# FiveHundredAndSeventeen

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndSeventeen } from "@vercel/sdk/models/usereventpayload474actortype.js";

let value: FiveHundredAndSeventeen = {
  next: {
    enabled: true,
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
      "<value 3>",
    ],
  },
  scope: "organization",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload517Next](../models/usereventpayload517next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload517Previous](../models/usereventpayload517previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload517Scope](../models/usereventpayload517scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |