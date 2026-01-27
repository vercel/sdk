# CreateCustomEnvironmentBranchMatcher

How we want to determine a matching branch. This is optional.

## Example Usage

```typescript
import { CreateCustomEnvironmentBranchMatcher } from "@vercel/sdk/models/createcustomenvironmentop.js";

let value: CreateCustomEnvironmentBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | [models.CreateCustomEnvironmentType](../models/createcustomenvironmenttype.md) | :heavy_check_mark:                                                             | Type of matcher. One of \"equals\", \"startsWith\", or \"endsWith\".           |
| `pattern`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | Git branch name or portion thereof.                                            |