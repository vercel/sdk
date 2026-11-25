# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/newenvvar.js";

let value: TwoHundredAndSixtyTwo = {
  next: {
    dsyncMode: "organization",
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
| `next`                                                                         | [models.UserEventPayload262Next](../models/usereventpayload262next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `organizationId`                                                               | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload262Previous](../models/usereventpayload262previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `teamName`                                                                     | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |