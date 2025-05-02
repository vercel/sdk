# CreateCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { CreateCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/createcustomenvironmentop.js";

let value: CreateCustomEnvironmentBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [models.CreateCustomEnvironmentEnvironmentResponseType](../models/createcustomenvironmentenvironmentresponsetype.md) | :heavy_check_mark:                                                                                                   | The type of matching to perform                                                                                      |
| `pattern`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The pattern to match against branch names                                                                            |