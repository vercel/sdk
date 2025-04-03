# TwentyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyNine } from "@vercel/sdk/models/userevent.js";

let value: TwentyNine = {
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

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `team`                                               | [models.Team](../models/team.md)                     | :heavy_check_mark:                                   | N/A                                                  |
| `configuration`                                      | [models.Configuration](../models/configuration.md)   | :heavy_check_mark:                                   | N/A                                                  |
| `project`                                            | [models.PayloadProject](../models/payloadproject.md) | :heavy_check_mark:                                   | N/A                                                  |
| `buildsEnabled`                                      | *boolean*                                            | :heavy_minus_sign:                                   | N/A                                                  |