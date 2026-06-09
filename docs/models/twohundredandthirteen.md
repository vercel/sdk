# TwoHundredAndThirteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirteen } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: TwoHundredAndThirteen = {
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
| `previous`                                                                     | [models.UserEventPayload213Previous](../models/usereventpayload213previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload213Next](../models/usereventpayload213next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |