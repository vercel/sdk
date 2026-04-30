# OneHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyOne } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndEightyOne = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultMemoryType: "<value>",
  },
  next: {
    functionDefaultMemoryType: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload181Previous](../models/usereventpayload181previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload181Next](../models/usereventpayload181next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |