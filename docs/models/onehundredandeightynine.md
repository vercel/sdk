# OneHundredAndEightyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndEightyNine } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndEightyNine = {
  projectId: "<id>",
  projectName: "<value>",
  previous: {},
  next: {
    issuerMode: "team",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload189Previous](../models/usereventpayload189previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload189Next](../models/usereventpayload189next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |