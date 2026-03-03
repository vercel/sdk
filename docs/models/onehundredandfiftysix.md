# OneHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftySix } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFiftySix = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload156Previous](../models/usereventpayload156previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload156Next](../models/usereventpayload156next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |