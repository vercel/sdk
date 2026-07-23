# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/twohundredandeighty.js";

let value: TwoHundredAndEighty = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload280Previous](../models/usereventpayload280previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload280Next](../models/usereventpayload280next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |