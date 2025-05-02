# GetCustomEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { GetCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/getcustomenvironmentop.js";

let value: GetCustomEnvironmentBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `type`                                                                                         | [models.GetCustomEnvironmentEnvironmentType](../models/getcustomenvironmentenvironmenttype.md) | :heavy_check_mark:                                                                             | The type of matching to perform                                                                |
| `pattern`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | The pattern to match against branch names                                                      |