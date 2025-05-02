# UpdateCustomEnvironmentEnvironmentBranchMatcher

Configuration for matching git branches to this environment

## Example Usage

```typescript
import { UpdateCustomEnvironmentEnvironmentBranchMatcher } from "@vercel/sdk/models/updatecustomenvironmentop.js";

let value: UpdateCustomEnvironmentEnvironmentBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [models.UpdateCustomEnvironmentEnvironmentResponseType](../models/updatecustomenvironmentenvironmentresponsetype.md) | :heavy_check_mark:                                                                                                   | The type of matching to perform                                                                                      |
| `pattern`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The pattern to match against branch names                                                                            |