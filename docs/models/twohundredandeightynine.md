# TwoHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEightyNine } from "@vercel/sdk/models/aws.js";

let value: TwoHundredAndEightyNine = {
  previous: {},
  next: {},
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload289Previous](../models/usereventpayload289previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload289Next](../models/usereventpayload289next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |