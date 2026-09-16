# ThreeHundredAndFifteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFifteen } from "@vercel/sdk/models/usereventpayloadgitprovider.js";

let value: ThreeHundredAndFifteen = {
  next: {},
  previous: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload315Next](../models/usereventpayload315next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload315Previous](../models/usereventpayload315previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |