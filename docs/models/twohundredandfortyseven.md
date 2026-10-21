# TwoHundredAndFortySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySeven } from "@vercel/sdk/models/rulegroups.js";

let value: TwoHundredAndFortySeven = {
  projectId: "<id>",
  resourceUrl: "https://infamous-retrospectivity.biz/",
  type: "connectSrc",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `resourceUrl`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload247Type](../models/usereventpayload247type.md) | :heavy_check_mark:                                                     | N/A                                                                    |