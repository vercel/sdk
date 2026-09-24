# TwoHundredAndSeventyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSeventyFour } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndSeventyFour = {
  next: {
    functionDefaultMemoryType: "<value>",
  },
  previous: {
    functionDefaultMemoryType: null,
  },
  projectId: "<id>",
  projectName: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `next`                                                                         | [models.UserEventPayload274Next](../models/usereventpayload274next.md)         | :heavy_check_mark:                                                             | N/A                                                                            |
| `previous`                                                                     | [models.UserEventPayload274Previous](../models/usereventpayload274previous.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectId`                                                                    | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `projectName`                                                                  | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |