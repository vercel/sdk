# OneHundredAndNinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyNine } from "@vercel/sdk/models/usereventpayload159next.js";

let value: OneHundredAndNinetyNine = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload199Previous](../models/usereventpayload199previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload199Next](../models/usereventpayload199next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |