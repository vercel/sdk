# GetProjectsResponseBodyBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebody.js";

let value: GetProjectsResponseBodyBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The pattern to match against branch names                                                                                                            |
| `type`                                                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson1Type](../models/getprojectsresponsebodyprojectsresponse200applicationjson1type.md) | :heavy_check_mark:                                                                                                                                   | The type of matching to perform                                                                                                                      |