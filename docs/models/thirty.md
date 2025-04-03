# Thirty

The payload of the event, if requested.

## Example Usage

```typescript
import { Thirty } from "@vercel/sdk/models/userevent.js";

let value: Thirty = {
  team: {
    id: "<id>",
    name: "<value>",
  },
  configuration: {
    id: "<id>",
  },
  project: {
    id: "<id>",
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `team`                                                                 | [models.PayloadTeam](../models/payloadteam.md)                         | :heavy_check_mark:                                                     | N/A                                                                    |
| `configuration`                                                        | [models.PayloadConfiguration](../models/payloadconfiguration.md)       | :heavy_check_mark:                                                     | N/A                                                                    |
| `project`                                                              | [models.UserEventPayloadProject](../models/usereventpayloadproject.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `buildsEnabled`                                                        | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |
| `passive`                                                              | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |