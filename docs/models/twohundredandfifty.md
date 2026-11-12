# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/factorsorigin.js";

let value: TwoHundredAndFifty = {
  next: {
    dsyncMode: "team",
  },
  organizationId: "<id>",
  previous: {
    dsyncMode: "team",
  },
  teamId: "<id>",
  teamName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload250Next](../models/usereventpayload250next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `organizationId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload250Previous](../models/usereventpayload250previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |