# ThreeHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwentyOne } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: ThreeHundredAndTwentyOne = {
  next: {
    skewProtectionMaxAge: 8543.29,
  },
  previous: {},
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload321Next](../models/usereventpayload321next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload321Previous](../models/usereventpayload321previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |