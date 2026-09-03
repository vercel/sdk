# TwoHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFourteen } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndFourteen = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://new-diver.com/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload214Type](../models/usereventpayload214type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |