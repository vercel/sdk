# TwoHundredAndFiftySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySeven } from "@vercel/sdk/models/consent.js";

let value: TwoHundredAndFiftySeven = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload257Previous](../models/usereventpayload257previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload257Next](../models/usereventpayload257next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |