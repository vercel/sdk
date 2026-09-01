# TwoHundredAndSeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyOne } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: TwoHundredAndSeventyOne = {
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
| `previous`                                                                     | [models.UserEventPayload271Previous](../models/usereventpayload271previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload271Next](../models/usereventpayload271next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |