# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/onehundredandeightyfive.js";

let value: TwoHundredAndFiftyOne = {
  projectId: "<id>",
  resourceUrl: "https://impolite-jacket.net",
  type: "connectSrc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload251Type](../models/usereventpayload251type.md) | :heavy_check_mark:                                                     | N/A                                                                    |