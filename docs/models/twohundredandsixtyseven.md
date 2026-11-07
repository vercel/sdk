# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/factors1.js";

let value: TwoHundredAndSixtySeven = {
  next: [
    {
      envId: "<id>",
      perimeterId: "<id>",
    },
  ],
  previous: [],
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `next`                                                                           | [models.UserEventPayload267Next](../models/usereventpayload267next.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previous`                                                                       | [models.UserEventPayload267Previous](../models/usereventpayload267previous.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |