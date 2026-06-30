# GetProjectProjectsBranchMatcher

## Example Usage

```typescript
import { GetProjectProjectsBranchMatcher } from "@vercel/sdk/models/getprojectlastrollbacktarget.js";

let value: GetProjectProjectsBranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                           | [models.GetProjectProjectsResponse200ApplicationJSONResponseBodyType](../models/getprojectprojectsresponse200applicationjsonresponsebodytype.md) | :heavy_check_mark:                                                                                                                               | The type of matching to perform                                                                                                                  |
| `pattern`                                                                                                                                        | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The pattern to match against branch names                                                                                                        |