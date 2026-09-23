# ThreeHundredAndTwentyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFive } from "@vercel/sdk/models/twohundredandeightytwo.js";

let value: ThreeHundredAndTwentyFive = {
  next: {
    skewProtectionMaxAge: 5953.03,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload325Next](../models/usereventpayload325next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload325Previous](../models/usereventpayload325previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |