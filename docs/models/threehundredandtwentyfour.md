# ThreeHundredAndTwentyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyFour } from "@vercel/sdk/models/twohundredandeightyone.js";

let value: ThreeHundredAndTwentyFour = {
  next: {
    skewProtectionMaxAge: 1859.92,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload324Next](../models/usereventpayload324next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload324Previous](../models/usereventpayload324previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |