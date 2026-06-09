# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/fortyseven.js";

let value: EightyFour = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "default",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectId`                                                 | *string*                                                    | :heavy_minus_sign:                                          | N/A                                                         |
| `projectName`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `source`                                                    | *string*                                                    | :heavy_check_mark:                                          | Classified deploy source, e.g. 'cli', 'git', 'integration'. |
| `ruleName`                                                  | [models.RuleName](../models/rulename.md)                    | :heavy_check_mark:                                          | Which rule blocked the deploy.                              |
| `ruleProvenance`                                            | [models.RuleProvenance](../models/ruleprovenance.md)        | :heavy_check_mark:                                          | Team-level or project-level rule.                           |