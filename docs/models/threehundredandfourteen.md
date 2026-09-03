# ThreeHundredAndFourteen

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndFourteen } from "@vercel/sdk/models/twohundredandseventytwo.js";

let value: ThreeHundredAndFourteen = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `projectName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Display name for Activity links. Optional for events stored before it was published. |
| `reasonCode`                                                                         | [models.PayloadReasonCode](../models/payloadreasoncode.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |