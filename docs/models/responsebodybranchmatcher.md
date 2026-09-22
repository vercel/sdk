# ResponseBodyBranchMatcher

## Example Usage

```typescript
import { ResponseBodyBranchMatcher } from "@vercel/sdk/models/getprojectsresponsebodyprojectsresponse200applicationjson1target.js";

let value: ResponseBodyBranchMatcher = {
  pattern: "<value>",
  type: "startsWith",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The pattern to match against branch names                                                                            |
| `type`                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200Type](../models/getprojectsresponsebodyprojectsresponse200type.md) | :heavy_check_mark:                                                                                                   | The type of matching to perform                                                                                      |