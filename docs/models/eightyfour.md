# EightyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { EightyFour } from "@vercel/sdk/models/fortysix.js";

let value: EightyFour = {
  projectName: "<value>",
  source: "<value>",
  ruleName: "deploymentSources",
  ruleProvenance: "team",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `projectName`                                               | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         |
| `source`                                                    | *string*                                                    | :heavy_check_mark:                                          | Classified deploy source, e.g. 'cli', 'git', 'integration'. |
| `ruleName`                                                  | [models.RuleName](../models/rulename.md)                    | :heavy_check_mark:                                          | Which rule blocked the deploy.                              |
| `ruleProvenance`                                            | [models.RuleProvenance](../models/ruleprovenance.md)        | :heavy_check_mark:                                          | Team-level or project-level rule.                           |