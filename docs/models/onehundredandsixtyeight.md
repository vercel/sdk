# OneHundredAndSixtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtyEight } from "@vercel/sdk/models/lasteditedbyprincipal2.js";

let value: OneHundredAndSixtyEight = {
  projectId: "<id>",
  ruleGroups: {},
  rulesetName: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `projectId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `ruleGroups`                                                 | Record<string, [models.RuleGroups](../models/rulegroups.md)> | :heavy_check_mark:                                           | N/A                                                          |
| `rulesetName`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |