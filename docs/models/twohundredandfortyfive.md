# TwoHundredAndFortyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortyFive } from "@vercel/sdk/models/usereventpayloadnext.js";

let value: TwoHundredAndFortyFive = {
  projectId: "<id>",
  resourceUrl: "https://deficient-tomb.info",
  type: "connectSrc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload245Type](../models/usereventpayload245type.md) | :heavy_check_mark:                                                     | N/A                                                                    |