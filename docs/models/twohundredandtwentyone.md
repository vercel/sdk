# TwoHundredAndTwentyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwentyOne } from "@vercel/sdk/models/onehundredandsixtyfour.js";

let value: TwoHundredAndTwentyOne = {
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
| `previous`                                                                     | [models.UserEventPayload221Previous](../models/usereventpayload221previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload221Next](../models/usereventpayload221next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |