# UpdateCustomEnvironmentBranchMatcher

How we want to determine a matching branch. This is optional.

## Example Usage

```typescript
import { UpdateCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/updatecustomenvironmentop.js";

let value: UpdateCustomEnvironmentBranchMatcher = {
  type: "equals",
  pattern: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.UpdateCustomEnvironmentType](../models/updatecustomenvironmenttype.md) | :heavy_check_mark:                                                             | Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".           |
| `pattern`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Git branch name or portion thereof.                                            |