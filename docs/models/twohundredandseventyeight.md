# TwoHundredAndSeventyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyEight } from "@vercel/sdk/models/twohundredandeighteen.js";

let value: TwoHundredAndSeventyEight = {
  next: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
    ],
  },
  previous: {
    functionDefaultRegions: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload278Next](../models/usereventpayload278next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload278Previous](../models/usereventpayload278previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |