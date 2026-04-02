# TwoHundredAndOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndOne } from "@vercel/sdk/models/usereventpayload161next.js";

let value: TwoHundredAndOne = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload201Previous](../models/usereventpayload201previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload201Next](../models/usereventpayload201next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |