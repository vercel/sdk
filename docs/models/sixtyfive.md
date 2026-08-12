# SixtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyFive } from "@vercel/sdk/models/sixty.js";

let value: SixtyFive = {
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