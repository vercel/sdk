# TwoHundredAndNinety

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndNinety } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndNinety = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload290Previous](../models/usereventpayload290previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload290Next](../models/usereventpayload290next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |