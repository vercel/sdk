# OneHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyEight } from "@vercel/sdk/models/analyticsusage.js";

let value: OneHundredAndSixtyEight = {
  projectId: "<id>",
  type: "connectSrc",
  resourceUrl: "https://unhappy-sonata.org/",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload168Type](../models/usereventpayload168type.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |