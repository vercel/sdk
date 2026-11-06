# FiveHundredAndEight

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndEight } from "@vercel/sdk/models/usereventpayload465actortype.js";

let value: FiveHundredAndEight = {
  next: {
    enabled: true,
    issuerUrls: [],
  },
  previous: {
    enabled: false,
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
| `next`                                                                         | [models.UserEventPayload508Next](../models/usereventpayload508next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload508Previous](../models/usereventpayload508previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload508Scope](../models/usereventpayload508scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |