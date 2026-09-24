# TwoHundredAndThirty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThirty } from "@vercel/sdk/models/twohundredandsixteen.js";

let value: TwoHundredAndThirty = {
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
| `type`                                                                 | [models.UserEventPayload230Type](../models/usereventpayload230type.md) | :heavy_check_mark:                                                     | N/A                                                                    |