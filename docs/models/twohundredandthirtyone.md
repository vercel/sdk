# TwoHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirtyOne } from "@vercel/sdk/models/onehundredandeightythree.js";

let value: TwoHundredAndThirtyOne = {
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
| `previous`                                                                     | [models.UserEventPayload231Previous](../models/usereventpayload231previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload231Next](../models/usereventpayload231next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |