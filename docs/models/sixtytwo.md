# SixtyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { SixtyTwo } from "@vercel/sdk/models/userevent.js";

let value: SixtyTwo = {
  projectId: "<id>",
  rulesetName: "<value>",
  ruleGroups: {
    "key": {
      active: false,
    },
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `rulesetName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `ruleGroups`                                                 | Record<string, [models.RuleGroups](../models/rulegroups.md)> | :heavy_check_mark:                                           | N/A                                                          |