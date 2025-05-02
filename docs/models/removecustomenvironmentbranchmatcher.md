# RemoveCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { RemoveCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/removecustomenvironmentop.js";

let value: RemoveCustomEnvironmentBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `type`                                                                                               | [models.RemoveCustomEnvironmentEnvironmentType](../models/removecustomenvironmentenvironmenttype.md) | :heavy_check_mark:                                                                                   | The type of matching to perform                                                                      |
| `pattern`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | The pattern to match against branch names                                                            |