# TwoHundredAndSeventyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyNine } from "@vercel/sdk/models/twohundredandthirteen.js";

let value: TwoHundredAndSeventyNine = {
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
| `previous`                                                                     | [models.UserEventPayload279Previous](../models/usereventpayload279previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `next`                                                                         | [models.UserEventPayload279Next](../models/usereventpayload279next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |