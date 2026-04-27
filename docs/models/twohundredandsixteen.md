# TwoHundredAndSixteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixteen } from "@vercel/sdk/models/onehundredandninetytwo.js";

let value: TwoHundredAndSixteen = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload216Previous](../models/usereventpayload216previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload216Next](../models/usereventpayload216next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |