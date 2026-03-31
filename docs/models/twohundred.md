# TwoHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundred } from "@vercel/sdk/models/onehundredandsixty.js";

let value: TwoHundred = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload200Previous](../models/usereventpayload200previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload200Next](../models/usereventpayload200next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |