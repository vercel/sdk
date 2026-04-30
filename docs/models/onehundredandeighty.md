# OneHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEighty } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndEighty = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionDefaultTimeout: 5432.27,
  },
  next: {
    functionDefaultTimeout: 2107.64,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload180Previous](../models/usereventpayload180previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload180Next](../models/usereventpayload180next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |