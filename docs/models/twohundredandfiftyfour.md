# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/newowner.js";

let value: TwoHundredAndFiftyFour = {
  projectId: "<id>",
  resourceUrl: "https://colorless-councilman.name",
  type: "connectSrc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload254Type](../models/usereventpayload254type.md) | :heavy_check_mark:                                                     | N/A                                                                    |