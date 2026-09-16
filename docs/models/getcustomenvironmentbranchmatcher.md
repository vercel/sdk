# GetCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/getcustomenvironmentop.js";

let value: GetCustomEnvironmentBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `pattern`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The pattern to match against branch names                                                      |
| `type`                                                                                         | [models.GetCustomEnvironmentEnvironmentType](../models/getcustomenvironmentenvironmenttype.md) | :heavy_check_mark:                                                                             | The type of matching to perform                                                                |