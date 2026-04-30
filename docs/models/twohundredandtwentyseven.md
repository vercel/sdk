# TwoHundredAndTwentySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentySeven } from "@vercel/sdk/models/oldoptionsallowlist.js";

let value: TwoHundredAndTwentySeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 2580.91,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload227Next](../models/usereventpayload227next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload227Previous](../models/usereventpayload227previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |