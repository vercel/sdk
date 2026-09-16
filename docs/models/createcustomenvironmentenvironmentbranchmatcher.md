# CreateCustomEnvironmentEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateCustomEnvironmentEnvironmentBranchMatcher } from "@vercel/sdk/models/createcustomenvironmentop.js";

let value: CreateCustomEnvironmentEnvironmentBranchMatcher = {
  pattern: "<value>",
  type: "equals",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The pattern to match against branch names                                                                            |
| `type`                                                                                                               | [models.CreateCustomEnvironmentEnvironmentResponseType](../models/createcustomenvironmentenvironmentresponsetype.md) | :heavy_check_mark:                                                                                                   | The type of matching to perform                                                                                      |