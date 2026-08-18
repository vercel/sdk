# TwoHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyEight } from "@vercel/sdk/models/twohundredandfiftynine.js";

let value: TwoHundredAndSixtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload268Previous](../models/usereventpayload268previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload268Next](../models/usereventpayload268next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |