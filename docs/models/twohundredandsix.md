# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/oneorigin.js";

let value: TwoHundredAndSix = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://flawless-trolley.info/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload206Type](../models/usereventpayload206type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |