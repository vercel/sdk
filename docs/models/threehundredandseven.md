# ThreeHundredAndSeven

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSeven } from "@vercel/sdk/models/twohundredandseventyone.js";

let value: ThreeHundredAndSeven = {
  projectId: "<id>",
  projectName: "<value>",
  next: {
    skewProtectionMaxAge: 4080.81,
  },
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload307Next](../models/usereventpayload307next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload307Previous](../models/usereventpayload307previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |