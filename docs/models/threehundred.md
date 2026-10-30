# ThreeHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundred } from "@vercel/sdk/models/usereventpayload261origin.js";

let value: ThreeHundred = {
  next: {
    functionDefaultTimeout: 4383.12,
  },
  previous: {
    functionDefaultTimeout: 3341.95,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload300Next](../models/usereventpayload300next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload300Previous](../models/usereventpayload300previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |