# ThreeHundredAndSixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndSixtyFive } from "@vercel/sdk/models/usereventprincipal4.js";

let value: ThreeHundredAndSixtyFive = {
  next: {},
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload365Next](../models/usereventpayload365next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload365Previous](../models/usereventpayload365previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |