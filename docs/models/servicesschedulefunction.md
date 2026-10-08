# ServicesScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { ServicesScheduleFunction } from "@vercel/sdk/models/canceldeploymentmissingdeploymentsresponse2.js";

let value: ServicesScheduleFunction = {
  entrypoints: [
    {
      entrypoint: "<value>",
      scheduleNames: [],
      sourceFile: "<value>",
    },
  ],
  outputPath: "<value>",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `entrypoints`                                                    | [models.ServicesEntrypoints](../models/servicesentrypoints.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `outputPath`                                                     | *string*                                                         | :heavy_check_mark:                                               | Function output path every schedule in this build targets.       |