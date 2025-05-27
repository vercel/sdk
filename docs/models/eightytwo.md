# EightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyTwo } from "@vercel/sdk/models/userevent.js";

let value: EightyTwo = {
  projectName: "<value>",
  action: "disabled",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `projectName`                                                        | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `action`                                                             | [models.UserEventPayloadAction](../models/usereventpayloadaction.md) | :heavy_check_mark:                                                   | N/A                                                                  |