# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload250Previous](../models/usereventpayload250previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload250Next](../models/usereventpayload250next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |