# TwoHundredAndSeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFive } from "@vercel/sdk/models/twohundredandseventyfive.js";

let value: TwoHundredAndSeventyFive = {
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
| `previous`                                                                     | [models.UserEventPayload275Previous](../models/usereventpayload275previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload275Next](../models/usereventpayload275next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |