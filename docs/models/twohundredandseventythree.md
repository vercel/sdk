# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndSeventyThree = {
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
| `previous`                                                                     | [models.UserEventPayload273Previous](../models/usereventpayload273previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload273Next](../models/usereventpayload273next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |