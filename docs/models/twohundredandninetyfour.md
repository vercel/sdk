# TwoHundredAndNinetyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinetyFour } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndNinetyFour = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload294Previous](../models/usereventpayload294previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload294Next](../models/usereventpayload294next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |