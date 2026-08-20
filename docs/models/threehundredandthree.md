# ThreeHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndThree } from "@vercel/sdk/models/twohundredandsixty.js";

let value: ThreeHundredAndThree = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload303Previous](../models/usereventpayload303previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload303Next](../models/usereventpayload303next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |