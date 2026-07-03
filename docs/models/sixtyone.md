# SixtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyOne } from "@vercel/sdk/models/action.js";

let value: SixtyOne = {
  project: {
    id: "<id>",
    name: "<value>",
  },
  versionId: "<id>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `project`                                                              | [models.UserEventPayloadProject](../models/usereventpayloadproject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `versionId`                                                            | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |