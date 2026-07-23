# TwoHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySeven } from "@vercel/sdk/models/twohundredandseven.js";

let value: TwoHundredAndFortySeven = {
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
| `previous`                                                                     | [models.UserEventPayload247Previous](../models/usereventpayload247previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload247Next](../models/usereventpayload247next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |