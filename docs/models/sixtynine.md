# SixtyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyNine } from "@vercel/sdk/models/userevent.js";

let value: SixtyNine = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {},
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rulesetName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `ruleGroups`                                                 | Record<string, [models.RuleGroups](../models/rulegroups.md)> | :heavy_check_mark:                                           | N/A                                                          |