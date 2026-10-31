# FiveHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { FiveHundredAndThree } from "@vercel/sdk/models/usereventpayload459actortype.js";

let value: FiveHundredAndThree = {
  next: {
    enabled: true,
    issuerUrls: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
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
| `next`                                                                         | [models.UserEventPayload503Next](../models/usereventpayload503next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload503Previous](../models/usereventpayload503previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `scope`                                                                        | [models.UserEventPayload503Scope](../models/usereventpayload503scope.md)       | :heavy_check_mark:                                                             | N/A                                                                            |