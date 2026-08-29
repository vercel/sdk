# ThreeHundredAndTwelve

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwelve } from "@vercel/sdk/models/twohundredandseventy.js";

let value: ThreeHundredAndTwelve = {
  projectId: "<id>",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projectId`                                                                          | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `projectName`                                                                        | *string*                                                                             | :heavy_minus_sign:                                                                   | Display name for Activity links. Optional for events stored before it was published. |
| `reasonCode`                                                                         | [models.PayloadReasonCode](../models/payloadreasoncode.md)                           | :heavy_minus_sign:                                                                   | N/A                                                                                  |