# CreateProjectProjectsResponseBranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsResponseBranchMatcher } from "@vercel/sdk/models/createprojecttier.js";

let value: CreateProjectProjectsResponseBranchMatcher = {
  pattern: "<value>",
  type: "endsWith",
};
```

## Fields

| Field                                                                                                                                                                                          | Type                                                                                                                                                                                           | Required                                                                                                                                                                                       | Description                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pattern`                                                                                                                                                                                      | *string*                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                             | The pattern to match against branch names                                                                                                                                                      |
| `type`                                                                                                                                                                                         | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyTargetsBranchMatcherType](../models/createprojectprojectsresponse200applicationjsonresponsebodytargetsbranchmatchertype.md) | :heavy_check_mark:                                                                                                                                                                             | The type of matching to perform                                                                                                                                                                |