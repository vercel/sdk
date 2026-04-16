# OneHundredAndEightyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyFive } from "@vercel/sdk/models/onehundredandseventytwo.js";

let value: OneHundredAndEightyFive = {
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
| `previous`                                                                     | [models.UserEventPayload185Previous](../models/usereventpayload185previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload185Next](../models/usereventpayload185next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |