# OneHundredAndNinetyThree

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndNinetyThree } from "@vercel/sdk/models/onehundredandfiftyeight.js";

let value: OneHundredAndNinetyThree = {
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