# ResponseBodyBranchMatcher

## Example Usage

```typescript
import { ResponseBodyBranchMatcher } from "@vercel/sdk/models/getprojectsrouteprojects2.js";

let value: ResponseBodyBranchMatcher = {
  type: "startsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [models.GetProjectsResponseBodyProjectsResponse200Type](../models/getprojectsresponsebodyprojectsresponse200type.md) | :heavy_check_mark:                                                                                                   | The type of matching to perform                                                                                      |
| `pattern`                                                                                                            | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | The pattern to match against branch names                                                                            |