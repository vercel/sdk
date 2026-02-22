# EightyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyTwo } from "@vercel/sdk/models/oldteam.js";

let value: EightyTwo = {
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