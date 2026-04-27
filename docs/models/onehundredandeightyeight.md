# OneHundredAndEightyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyEight } from "@vercel/sdk/models/two1.js";

let value: OneHundredAndEightyEight = {
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
| `previous`                                                                     | [models.UserEventPayload188Previous](../models/usereventpayload188previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload188Next](../models/usereventpayload188next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |