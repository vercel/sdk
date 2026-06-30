# CreateProjectProjectsResponse200BranchMatcher

## Example Usage

```typescript
import { CreateProjectProjectsResponse200BranchMatcher } from "@vercel/sdk/models/createprojectapril2026securityincidentmigrationappliedfrom.js";

let value: CreateProjectProjectsResponse200BranchMatcher = {
  type: "endsWith",
  pattern: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                               | [models.CreateProjectProjectsResponse200ApplicationJSONResponseBodyAliasDeploymentType](../models/createprojectprojectsresponse200applicationjsonresponsebodyaliasdeploymenttype.md) | :heavy_check_mark:                                                                                                                                                                   | The type of matching to perform                                                                                                                                                      |
| `pattern`                                                                                                                                                                            | *string*                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                   | The pattern to match against branch names                                                                                                                                            |