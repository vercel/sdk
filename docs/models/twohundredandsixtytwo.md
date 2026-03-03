# TwoHundredAndSixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtyTwo } from "@vercel/sdk/models/userevent.js";

let value: TwoHundredAndSixtyTwo = {
  projects: [],
  uid: "<id>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `projects`                                               | [models.PayloadProjects](../models/payloadprojects.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `uid`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |