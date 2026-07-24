# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandeleven.js";

let value: TwoHundredAndSeventyEight = {
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
| `previous`                                                                     | [models.UserEventPayload278Previous](../models/usereventpayload278previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload278Next](../models/usereventpayload278next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |