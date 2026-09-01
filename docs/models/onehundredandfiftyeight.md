# OneHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyEight } from "@vercel/sdk/models/previousrule.js";

let value: OneHundredAndFiftyEight = {
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