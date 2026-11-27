# TwoHundredAndEighty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndEighty } from "@vercel/sdk/models/usereventpayloaddsyncmode.js";

let value: TwoHundredAndEighty = {
  projectId: "<id>",
  resourceUrl: "https://ample-jungle.com",
  type: "connectSrc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload280Type](../models/usereventpayload280type.md) | :heavy_check_mark:                                                     | N/A                                                                    |