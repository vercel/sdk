# TwoHundredAndSeventyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyThree } from "@vercel/sdk/models/factorsorigin.js";

let value: TwoHundredAndSeventyThree = {
  next: [],
  previous: [],
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `next`                                                                           | [models.UserEventPayload273Next](../models/usereventpayload273next.md)[]         | :heavy_check_mark:                                                               | N/A                                                                              |
| `previous`                                                                       | [models.UserEventPayload273Previous](../models/usereventpayload273previous.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectId`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `projectName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |