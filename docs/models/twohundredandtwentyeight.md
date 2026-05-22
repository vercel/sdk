# TwoHundredAndTwentyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyEight } from "@vercel/sdk/models/usereventpayload227next.js";

let value: TwoHundredAndTwentyEight = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "global",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload228Previous](../models/usereventpayload228previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload228Next](../models/usereventpayload228next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |