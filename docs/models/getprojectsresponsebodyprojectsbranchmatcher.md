# GetProjectsResponseBodyProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyProjectsBranchMatcher } from "@vercel/sdk/models/getprojectscontenthint3.js";

let value: GetProjectsResponseBodyProjectsBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                          | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                                         | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson1AliasType](../models/getprojectsresponsebodyprojectsresponse200applicationjson1aliastype.md) | :heavy_check_mark:                                                                                                                                             | The type of matching to perform                                                                                                                                |
| `pattern`                                                                                                                                                      | *string*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                             | The pattern to match against branch names                                                                                                                      |