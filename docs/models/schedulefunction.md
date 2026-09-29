# ScheduleFunction

Set when this build produces a function for schedule entrypoints.

## Example Usage

```typescript
import { ScheduleFunction } from "@vercel/sdk/models/canceldeploymentresponsebody.js";

let value: ScheduleFunction = {
  entrypoints: [],
  outputPath: "<value>",
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `entrypoints`                                              | [models.Entrypoints](../models/entrypoints.md)[]           | :heavy_check_mark:                                         | N/A                                                        |
| `outputPath`                                               | *string*                                                   | :heavy_check_mark:                                         | Function output path every schedule in this build targets. |