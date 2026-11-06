# TwoHundredAndFiftySix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftySix } from "@vercel/sdk/models/usereventpayload217provider.js";

let value: TwoHundredAndFiftySix = {
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
| `type`                                                                 | [models.UserEventPayload256Type](../models/usereventpayload256type.md) | :heavy_check_mark:                                                     | N/A                                                                    |