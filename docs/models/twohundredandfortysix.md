# TwoHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFortySix } from "@vercel/sdk/models/rulegroups.js";

let value: TwoHundredAndFortySix = {
  headerName: "<value>",
  projectId: "<id>",
  type: "header",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `headerName`                                                           | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `projectId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `type`                                                                 | [models.UserEventPayload246Type](../models/usereventpayload246type.md) | :heavy_check_mark:                                                     | N/A                                                                    |