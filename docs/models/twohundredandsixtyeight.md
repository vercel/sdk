# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSixtyEight = {
  next: [
    {
      envId: "<id>",
      perimeterId: "<id>",
    },
  ],
  previous: [
    {
      envId: "<id>",
      perimeterId: "<id>",
    },
  ],
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `next`                                                                           | [models.UserEventPayload268Next](../models/usereventpayload268next.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previous`                                                                       | [models.UserEventPayload268Previous](../models/usereventpayload268previous.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |