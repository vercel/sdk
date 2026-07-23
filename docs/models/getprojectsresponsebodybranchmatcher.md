# GetProjectsResponseBodyBranchMatcher

## Example Usage

```typescript
import { GetProjectsResponseBodyBranchMatcher } from "@vercel/sdk/models/getprojectsblockhistoryprojectsroute.js";

let value: GetProjectsResponseBodyBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200ApplicationJson1Type](../models/getprojectsresponsebodyprojectsresponse200applicationjson1type.md) | :heavy_check_mark:                                                                                                                                   | The type of matching to perform                                                                                                                      |
| `pattern`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The pattern to match against branch names                                                                                                            |