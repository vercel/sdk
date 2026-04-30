# OneHundredAndEightyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyThree } from "@vercel/sdk/models/microfrontends2.js";

let value: OneHundredAndEightyThree = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {
    functionZeroConfigFailover: false,
  },
  next: {
    functionZeroConfigFailover: false,
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload183Previous](../models/usereventpayload183previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload183Next](../models/usereventpayload183next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |